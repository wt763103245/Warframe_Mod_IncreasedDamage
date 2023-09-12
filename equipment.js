/**装备 */
class equipment {
    // constructor(damage=1, element=1, multiple=1, speed=1, crit=0.1, critDamage=2.0) {
    constructor(crit = 0.1, critDamage = 2.0) {
        /**@type {Number} 武器伤害 */
        this.damage = 1;
        /**@type {Number} 元素伤害 */
        this.element = 1;
        /**@type {Number} 多重射击 */
        this.multiple = 1;
        /**@type {Number} 射速攻速 */
        this.speed = 1;
        /**@type {Number} 暴击几率 */
        this.crit = crit;
        /**@type {Number} 暴击几率加成 */
        this.critAdd = 1;
        /**@type {Number} 暴击伤害 */
        this.critDamage = critDamage - 1;
        /**@type {Number} 暴击伤害加成 */
        this.critDamageAdd = 1;
        // /**@type {Number} 触发 */
        /**@type {Array} 当前装备安装的mod */
        this.mod = [];
    }
    consoleLog(num) {
        let str = num * 100 - 100
        console.log(`伤害${str > 0 ? '提升' : '降低'}了` + str + "%")
        return num
    }
    addDamage(damage = 1.65) {
        let oldDamage = this.damage;
        this.damage += damage;
        this.consoleLog(this.damage / oldDamage);
    }
    addElement(damage = 0.9) {
        let oldDamage = this.element;
        this.element += damage;
        this.consoleLog(this.element / oldDamage);
    }
    addMultiple(damage = 0.9) {
        let oldDamage = this.multiple;
        this.multiple += damage;
        this.consoleLog(this.multiple / oldDamage);
    }
    addSpeed(speed = 0.9) {
        let oldDamage = this.speed;
        this.speed += speed;
        this.consoleLog(this.speed / oldDamage);
    }
    addCrit(crit = 2.2) {
        let oldCrit = this.critAdd;
        this.critAdd += crit;
        let add = ((
            this.crit * this.critAdd *
            this.critDamage * this.critDamageAdd
        ) + 1)
            / ((
                this.crit * oldCrit *
                this.critDamage * this.critDamageAdd
            ) + 1)
        this.consoleLog(add);
    }
    addCritDamage(damage = 0.9) {
        let oldCrittDamage = this.critDamageAdd;
        this.critDamageAdd += damage;
        let add = ((
            this.crit * this.critAdd *
            this.critDamage * this.critDamageAdd
        ) + 1)
            / ((
                this.crit * this.critAdd *
                this.critDamage * oldCrittDamage
            ) + 1)
        this.consoleLog(add);
    }
    allUp() {
        let add = (((
            this.crit * this.critAdd *
            this.critDamage * this.critDamageAdd
        ) + 1) * this.damage * this.element * this.multiple * this.speed)
            / (((
                this.crit * 1 *
                this.critDamage * 1
            ) + 1) * 1 * 1 * 1 * 1)
        return this.consoleLog(add);
    }
    /**@type {{String: function}} mod拥有的属性对应的方法 */
    AttributeMethod = {
        /**武器伤害 */
        damage: this.addDamage,
        /**元素伤害 */
        element: this.addElement,
        /**多重射击 */
        multiple: this.addMultiple,
        /**射速攻速 */
        speed: this.addSpeed,
        /**暴击几率加成 */
        critAdd: this.addCrit,
        /**暴击伤害加成 */
        critDamageAdd: this.addCritDamage,
    }
    /**添加一个有属性的mod对象到当前装备属性中
     * @param {Object} mod 拥有mod属性的mod
     */
    addMod(mod) {
        //拥有的属性对应的方法
        let funcDict = this.AttributeMethod
        //循环当前mod的所有属性，判断这个属性是否有对应的方法，将这个属性传入到这个方法中
        for (let key in mod) if (key in funcDict) {
            let func = funcDict[key].bind(this);
            func(mod[key])
        };
        //添加到缓存中
        this.mod.push(mod);
    }
    /**在当前装备属性中移除一个有属性的mod对象
     * @param {Number} mod位置
     */
    removeMod(modPos) {
        //拥有的属性对应的方法
        let funcDict = this.AttributeMethod;
        let mod = this.mod[modPos];
        //循环当前mod的所有属性，判断这个属性是否有对应的方法，将这个属性传入到这个方法中
        for (key in mod) if (key in funcDict) funcDict[key](-mod[key]);
        //添加到缓存中
        this.mod.splice(modPos);
    }
}

// test1 = new equipment(0.22, 2.4);
// //压迫点p
// test1.addDamage(1.65);
// //牺牲 压迫点
// test1.addCrit(2.2 * 2);
// //并合 肢解
// test1.addCritDamage(0.85);
// //角斗士 威猛
// test1.addCritDamage(0.6);
// test1.addCrit(0.1);
// //元素 冰 触发
// test1.addElement(0.6);
// // test1.addElement(0.9);
// //元素 毒 触发
// test1.addElement(0.6);
// // test1.addElement(0.9);
// //一击必杀
// test1.addDamage(1.2);
// test2 = new equipment(0.22, 2.4);
// //牺牲 压迫点
// test2.addDamage(1.375);
// //牺牲 斩铁
// test2.addCrit(2.75 * 2);
// //并合 肢解
// test2.addCritDamage(0.85);
// //角斗士 威猛
// test2.addCritDamage(0.6);
// test2.addCrit(0.1);
// //元素 冰 触发
// test2.addElement(0.6);
// // test2.addElement(0.9);
// //元素 毒 触发
// test2.addElement(0.6);
// // test2.addElement(0.9);
// //一击必杀
// test2.addDamage(1.2);

// console.log(((test2.allUp() / test1.allUp()) * 100 - 100) + "%");

test1 = new equipment(0.22, 2.4);
const Mod = require('./data/mod');
test1.addMod(Mod.牺牲压迫点);
test1.addMod(Mod.牺牲斩铁);
test1.addMod(Mod.一击必杀);
test1.addMod(Mod.并合肢解);
test1.addMod(Mod.角斗士威猛);
test1.addMod(Mod.元素冰触发);
test1.addMod(Mod.元素毒触发);