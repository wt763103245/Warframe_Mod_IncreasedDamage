// /**@type {{String: {equipment.key: Number}}} */
var Mod = {
    压迫点p: {
        damage: 1.65
    },
    牺牲压迫点: {
        damage: 1.375,
        _damage: 1.2
    },
    牺牲斩铁: {
        critAdd: 2.75,
        _critAdd: 2.2
    },
    并合肢解: {
        critDamageAdd: 0.85
    },
    角斗士威猛: {
        critDamageAdd: 0.6,
        crit: 0.1
    },
    元素冰触发: {
        element: 0.6
    },
    元素毒触发: {
        element: 0.6
    },
    元素电触发: {
        element: 0.6
    },
    元素火触发: {
        element: 0.6
    },
    一击必杀: {
        damage: 1.2
    },
    腐败打击: {
        damage: 1,
        speed: -0.2
    },
    元素冰银: {
        element: 0.9
    },
    元素毒银: {
        element: 0.9
    },
    元素电银: {
        element: 0.9
    },
    元素火银: {
        element: 0.9
    },
    关键延迟: {
        critAdd: 2,
        speed: -0.2
    },
    致命一击: {
        critAdd: 1.5
    }
}
module.exports = Mod
// export {Mod}