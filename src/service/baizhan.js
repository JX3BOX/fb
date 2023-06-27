import { $node, $cms } from "@jx3box/jx3box-common/js/https";

// 获取所有的百战BOSS列表
export function getBosses() {
    return $node().get("/monster/boss");
}

// 获取所有的百战Buff列表
export function getBuffs() {
    return $node().get("/monster/buffs");
}

// 获取所有的百战roll点效果
export function getEffects() {
    return $node().get("/monster/effects");
}

// 获取所有的百战技能类型列表
export function getTypes() {
    return $node().get("/monster/types");
}

// 百战技能查询
export function getSkills(params) {
    return $node().get("/monster/skills", {
        params,
    });
}

// 技能查询
export function getSkill({ id, client, level }) {
    return $node().get(`/skill/id/${id}`, {
        params: {
            client: client,
            level: level,
        },
    });
}

// 获取BOSS额外数据
export function getBossInfo(params) {
    return $cms().get(`/api/cms/app/monster/boss`, {
        params,
    });
}

// 更新或添加BOSS数据
export function addBossInfo(data) {
    return $cms().post(`/api/cms/app/monster/boss`, data);
}
