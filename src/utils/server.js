const AHU = "奧匈帝國";
const GER = "德意志帝國";
const ITA = "義大利王國";
const OTM = "鄂圖曼帝國";
const UK = "大英帝國";
const USA = "美利堅合眾國";
const FRA = "法國";
const RUS = "俄羅斯帝國";
const BOL = "紅軍";
const WA = "白軍";
const OTT = "鄂圖曼帝國";
const UKG = "大英帝國";
const UKM = "皇家海軍陸戰隊";

const NAm = "北美洲";
const SAm = "南美洲";
const AC = "南極洲";
const Afr = "非洲";
const EU = "歐洲";
const Asia = "亞洲";
const OC = "大洋洲";

const filter = {
    name: "",
    slots: {
        none: "on",
        oneToFive: "on",
        sixToTen: "on",
        tenPlus: "on",
        // all: "on",
        spectator: "on",
    }, regions: {
        Asia: "off",
        EU: "off",
        OC: "off",
        NAm: "off",
        SAm: "off",
        Afr: "off",
        AC: "off",
    }
}

function getFilterString(region) {
    let target = JSON.parse(JSON.stringify(filter));

    switch (region) {
        case "all":
            target.regions.Asia = "on";
            target.regions.EU = "on";
            target.regions.OC = "on";
            target.regions.NAm = "on";
            target.regions.SAm = "on";
            target.regions.Afr = "on";
            target.regions.AC = "on";
            break;
        case "asia":
            target.regions.Asia = "on";
            break;
        case "eu":
            target.regions.EU = "on";
            break;
        case "oc":
            target.regions.OC = "on";
            break;
        case "nam":
            target.regions.NAm = "on";
            break;
        case "sam":
            target.regions.SAm = "on";
            break;
    }

    return JSON.stringify(target);
}


function isOfficialServer(serverType) {
    return serverType === "OFFICIAL";
}

function getPingImageMore(country) {
    switch (country.toLowerCase()) {
        case "hk":
            return {
                image: "images/ping/ping-best.png",
                ping: 34
            };
        case "jp":
            return {
                image: "images/ping/ping-good.png",
                ping: 56
            };
        case "de":
            return {
                image: "images/ping/ping-ok.png",
                ping: 149
            };
        case "au":
            return {
                image: "images/ping/ping-bad.png",
                ping: 180
            };
        case "us":
            return {
                image: "images/ping/ping-worst.png",
                ping: 206
            };
        case "br":
            return {
                image: "images/ping/ping-worst.png",
                ping: 231
            };
        default:
            return {
                image: "images/ping/ping-unknown.png",
                ping: 300
            };
    }
}

function getCountryImage(country) {
    switch (country.toLowerCase()) {
        case "ad":
            return "images/country/country-ad.png";
        case "ae":
            return "images/country/country-ae.png";
        case "af":
            return "images/country/country-af.png";
        case "ag":
            return "images/country/country-ag.png";
        case "ai":
            return "images/country/country-ai.png";
        case "al":
            return "images/country/country-al.png";
        case "am":
            return "images/country/country-am.png";
        case "an":
            return "images/country/country-an.png";
        case "ao":
            return "images/country/country-ao.png";
        case "aq":
            return "images/country/country-aq.png";
        case "ar":
            return "images/country/country-ar.png";
        case "as":
            return "images/country/country-as.png";
        case "at":
            return "images/country/country-at.png";
        case "au":
            return "images/country/country-au.png";
        case "aw":
            return "images/country/country-aw.png";
        case "ax":
            return "images/country/country-ax.png";
        case "az":
            return "images/country/country-az.png";
        case "ba":
            return "images/country/country-ba.png";
        case "bb":
            return "images/country/country-bb.png";
        case "bd":
            return "images/country/country-bd.png";
        case "be":
            return "images/country/country-be.png";
        case "bf":
            return "images/country/country-bf.png";
        case "bg":
            return "images/country/country-bg.png";
        case "bh":
            return "images/country/country-bh.png";
        case "bi":
            return "images/country/country-bi.png";
        case "bj":
            return "images/country/country-bj.png";
        case "bl":
            return "images/country/country-bl.png";
        case "bm":
            return "images/country/country-bm.png";
        case "bn":
            return "images/country/country-bn.png";
        case "bo":
            return "images/country/country-bo.png";
        case "br":
            return "images/country/country-br.png";
        case "bs":
            return "images/country/country-bs.png";
        case "bt":
            return "images/country/country-bt.png";
        case "bw":
            return "images/country/country-bw.png";
        case "by":
            return "images/country/country-by.png";
        case "bz":
            return "images/country/country-bz.png";
        case "ca":
            return "images/country/country-ca.png";
        case "cc":
            return "images/country/country-cc.png";
        case "cd":
            return "images/country/country-cd.png";
        case "cf":
            return "images/country/country-cf.png";
        case "cg":
            return "images/country/country-cg.png";
        case "ch":
            return "images/country/country-ch.png";
        case "ci":
            return "images/country/country-ci.png";
        case "ck":
            return "images/country/country-ck.png";
        case "cl":
            return "images/country/country-cl.png";
        case "cm":
            return "images/country/country-cm.png";
        case "cn":
            return "images/country/country-cn.png";
        case "co":
            return "images/country/country-co.png";
        case "cr":
            return "images/country/country-cr.png";
        case "cu":
            return "images/country/country-cu.png";
        case "cv":
            return "images/country/country-cv.png";
        case "cw":
            return "images/country/country-cw.png";
        case "cx":
            return "images/country/country-cx.png";
        case "cy":
            return "images/country/country-cy.png";
        case "cz":
            return "images/country/country-cz.png";
        case "de":
            return "images/country/country-de.png";
        case "dj":
            return "images/country/country-dj.png";
        case "dk":
            return "images/country/country-dk.png";
        case "dm":
            return "images/country/country-dm.png";
        case "do":
            return "images/country/country-do.png";
        case "dz":
            return "images/country/country-dz.png";
        case "ec":
            return "images/country/country-ec.png";
        case "ee":
            return "images/country/country-ee.png";
        case "eg":
            return "images/country/country-eg.png";
        case "eh":
            return "images/country/country-eh.png";
        case "er":
            return "images/country/country-er.png";
        case "es":
            return "images/country/country-es.png";
        case "et":
            return "images/country/country-et.png";
        case "eu":
            return "images/country/country-eu.png";
        case "fi":
            return "images/country/country-fi.png";
        case "fj":
            return "images/country/country-fj.png";
        case "fk":
            return "images/country/country-fk.png";
        case "fm":
            return "images/country/country-fm.png";
        case "fo":
            return "images/country/country-fo.png";
        case "fr":
            return "images/country/country-fr.png";
        case "ga":
            return "images/country/country-ga.png";
        case "gb":
            return "images/country/country-gb.png";
        case "gd":
            return "images/country/country-gd.png";
        case "ge":
            return "images/country/country-ge.png";
        case "gg":
            return "images/country/country-gg.png";
        case "gh":
            return "images/country/country-gh.png";
        case "gi":
            return "images/country/country-gi.png";
        case "gl":
            return "images/country/country-gl.png";
        case "gm":
            return "images/country/country-gm.png";
        case "gn":
            return "images/country/country-gn.png";
        case "gq":
            return "images/country/country-gq.png";
        case "gr":
            return "images/country/country-gr.png";
        case "gs":
            return "images/country/country-gs.png";
        case "gt":
            return "images/country/country-gt.png";
        case "gu":
            return "images/country/country-gu.png";
        case "gw":
            return "images/country/country-gw.png";
        case "gy":
            return "images/country/country-gy.png";
        case "hk":
            return "images/country/country-hk.png";
        case "hn":
            return "images/country/country-hn.png";
        case "hr":
            return "images/country/country-hr.png";
        case "ht":
            return "images/country/country-ht.png";
        case "hu":
            return "images/country/country-hu.png";
        case "ic":
            return "images/country/country-ic.png";
        case "id":
            return "images/country/country-id.png";
        case "ie":
            return "images/country/country-ie.png";
        case "il":
            return "images/country/country-il.png";
        case "im":
            return "images/country/country-im.png";
        case "in":
            return "images/country/country-in.png";
        case "iq":
            return "images/country/country-iq.png";
        case "ir":
            return "images/country/country-ir.png";
        case "is":
            return "images/country/country-is.png";
        case "it":
            return "images/country/country-it.png";
        case "je":
            return "images/country/country-je.png";
        case "jm":
            return "images/country/country-jm.png";
        case "jo":
            return "images/country/country-jo.png";
        case "jp":
            return "images/country/country-jp.png";
        case "ke":
            return "images/country/country-ke.png";
        case "kg":
            return "images/country/country-kg.png";
        case "kh":
            return "images/country/country-kh.png";
        case "ki":
            return "images/country/country-ki.png";
        case "km":
            return "images/country/country-km.png";
        case "kn":
            return "images/country/country-kn.png";
        case "kp":
            return "images/country/country-kp.png";
        case "kr":
            return "images/country/country-kr.png";
        case "kw":
            return "images/country/country-kw.png";
        case "ky":
            return "images/country/country-ky.png";
        case "kz":
            return "images/country/country-kz.png";
        case "la":
            return "images/country/country-la.png";
        case "lb":
            return "images/country/country-lb.png";
        case "lc":
            return "images/country/country-lc.png";
        case "li":
            return "images/country/country-li.png";
        case "lk":
            return "images/country/country-lk.png";
        case "lr":
            return "images/country/country-lr.png";
        case "ls":
            return "images/country/country-ls.png";
        case "lt":
            return "images/country/country-lt.png";
        case "lu":
            return "images/country/country-lu.png";
        case "lv":
            return "images/country/country-lv.png";
        case "ly":
            return "images/country/country-ly.png";
        case "ma":
            return "images/country/country-ma.png";
        case "md":
            return "images/country/country-md.png";
        case "me":
            return "images/country/country-me.png";
        case "mf":
            return "images/country/country-mf.png";
        case "mg":
            return "images/country/country-mg.png";
        case "mh":
            return "images/country/country-mh.png";
        case "mk":
            return "images/country/country-mk.png";
        case "ml":
            return "images/country/country-ml.png";
        case "mm":
            return "images/country/country-mm.png";
        case "mn":
            return "images/country/country-mn.png";
        case "mo":
            return "images/country/country-mo.png";
        case "mp":
            return "images/country/country-mp.png";
        case "mq":
            return "images/country/country-mq.png";
        case "mr":
            return "images/country/country-mr.png";
        case "ms":
            return "images/country/country-ms.png";
        case "mt":
            return "images/country/country-mt.png";
        case "mu":
            return "images/country/country-mu.png";
        case "mv":
            return "images/country/country-mv.png";
        case "mw":
            return "images/country/country-mw.png";
        case "mx":
            return "images/country/country-mx.png";
        case "my":
            return "images/country/country-my.png";
        case "mz":
            return "images/country/country-mz.png";
        case "na":
            return "images/country/country-na.png";
        case "nc":
            return "images/country/country-nc.png";
        case "ne":
            return "images/country/country-ne.png";
        case "nf":
            return "images/country/country-nf.png";
        case "ng":
            return "images/country/country-ng.png";
        case "ni":
            return "images/country/country-ni.png";
        case "nl":
            return "images/country/country-nl.png";
        case "no":
            return "images/country/country-no.png";
        case "np":
            return "images/country/country-np.png";
        case "nr":
            return "images/country/country-nr.png";
        case "nu":
            return "images/country/country-nu.png";
        case "nz":
            return "images/country/country-nz.png";
        case "om":
            return "images/country/country-om.png";
        case "pa":
            return "images/country/country-pa.png";
        case "pe":
            return "images/country/country-pe.png";
        case "pf":
            return "images/country/country-pf.png";
        case "pg":
            return "images/country/country-pg.png";
        case "ph":
            return "images/country/country-ph.png";
        case "pk":
            return "images/country/country-pk.png";
        case "pl":
            return "images/country/country-pl.png";
        case "pn":
            return "images/country/country-pn.png";
        case "pr":
            return "images/country/country-pr.png";
        case "ps":
            return "images/country/country-ps.png";
        case "pt":
            return "images/country/country-pt.png";
        case "pw":
            return "images/country/country-pw.png";
        case "py":
            return "images/country/country-py.png";
        case "qa":
            return "images/country/country-qa.png";
        case "ro":
            return "images/country/country-ro.png";
        case "rs":
            return "images/country/country-rs.png";
        case "ru":
            return "images/country/country-ru.png";
        case "rw":
            return "images/country/country-rw.png";
        case "sa":
            return "images/country/country-sa.png";
        case "sb":
            return "images/country/country-sb.png";
        case "sc":
            return "images/country/country-sc.png";
        case "sd":
            return "images/country/country-sd.png";
        case "se":
            return "images/country/country-se.png";
        case "sg":
            return "images/country/country-sg.png";
        case "sh":
            return "images/country/country-sh.png";
        case "si":
            return "images/country/country-si.png";
        case "sk":
            return "images/country/country-sk.png";
        case "sl":
            return "images/country/country-sl.png";
        case "sm":
            return "images/country/country-sm.png";
        case "sn":
            return "images/country/country-sn.png";
        case "so":
            return "images/country/country-so.png";
        case "sr":
            return "images/country/country-sr.png";
        case "ss":
            return "images/country/country-ss.png";
        case "st":
            return "images/country/country-st.png";
        case "sv":
            return "images/country/country-sv.png";
        case "sy":
            return "images/country/country-sy.png";
        case "sz":
            return "images/country/country-sz.png";
        case "tc":
            return "images/country/country-tc.png";
        case "td":
            return "images/country/country-td.png";
        case "tf":
            return "images/country/country-tf.png";
        case "tg":
            return "images/country/country-tg.png";
        case "th":
            return "images/country/country-th.png";
        case "tj":
            return "images/country/country-tj.png";
        case "tk":
            return "images/country/country-tk.png";
        case "tl":
            return "images/country/country-tl.png";
        case "tm":
            return "images/country/country-tm.png";
        case "tn":
            return "images/country/country-tn.png";
        case "to":
            return "images/country/country-to.png";
        case "tr":
            return "images/country/country-tr.png";
        case "tt":
            return "images/country/country-tt.png";
        case "tv":
            return "images/country/country-tv.png";
        case "tw":
            return "images/country/country-tw.png";
        case "tz":
            return "images/country/country-tz.png";
        case "ua":
            return "images/country/country-ua.png";
        case "ug":
            return "images/country/country-ug.png";
        case "us":
            return "images/country/country-us.png";
        case "uy":
            return "images/country/country-uy.png";
        case "uz":
            return "images/country/country-uz.png";
        case "va":
            return "images/country/country-va.png";
        case "vc":
            return "images/country/country-vc.png";
        case "ve":
            return "images/country/country-ve.png";
        case "vg":
            return "images/country/country-vg.png";
        case "vi":
            return "images/country/country-vi.png";
        case "vn":
            return "images/country/country-vn.png";
        case "vu":
            return "images/country/country-vu.png";
        case "wf":
            return "images/country/country-wf.png";
        case "ws":
            return "images/country/country-ws.png";
        case "ye":
            return "images/country/country-ye.png";
        case "yt":
            return "images/country/country-yt.png";
        case "za":
            return "images/country/country-za.png";
        case "zm":
            return "images/country/country-zm.png";
        case "zw":
            return "images/country/country-zw.png";
        default:
            return "images/country/country-default.png";
    }
}

function getServerImageMore(map) {
    switch (map.toLowerCase()) {
        case "mp_mountainfort":
            return {
                mapName: "格拉巴山",
                mapImage: "images/map/mp_mountainfort_medium.jpg",
                map2Image: "images/map/mp_mountainfort_any.jpg",
                team1Name: ITA,
                team1Image: "images/faction/faction_ita.png",
                team2Name: AHU,
                team2Image: "images/faction/faction_ahu.png",
            };
        case "mp_forest":
            return {
                mapName: "阿尔贡森林",
                mapImage: "images/map/mp_forest_medium.jpg",
                map2Image: "images/map/mp_forest_any.jpg",
                team1Name: USA,
                team1Image: "images/faction/faction_usa.png",
                team2Name: GER,
                team2Image: "images/faction/faction_ger.png",
            };
        case "mp_italiancoast":
            return {
                mapName: "帝国边境",
                mapImage: "images/map/mp_italiancoast_medium.jpg",
                map2Image: "images/map/mp_italiancoast_any.jpg",
                team1Name: ITA,
                team1Image: "images/faction/faction_ita.png",
                team2Name: AHU,
                team2Image: "images/faction/faction_ahu.png",
            };
        case "mp_chateau":
            return {
                mapName: "流血宴厅",
                mapImage: "images/map/mp_chateau_medium.jpg",
                map2Image: "images/map/mp_chateau_any.jpg",
                team1Name: USA,
                team1Image: "images/faction/faction_usa.png",
                team2Name: GER,
                team2Image: "images/faction/faction_ger.png",
            };
        case "mp_scar":
            return {
                mapName: "圣康坦的伤痕",
                mapImage: "images/map/mp_scar_medium.jpg",
                map2Image: "images/map/mp_scar_any.jpg",
                team1Name: GER,
                team1Image: "images/faction/faction_ger.png",
                team2Name: UK,
                team2Image: "images/faction/faction_uk.png",
            };
        case "mp_desert":
            return {
                mapName: "西奈沙漠",
                mapImage: "images/map/mp_desert_medium.jpg",
                map2Image: "images/map/mp_desert_any.jpg",
                team1Name: UK,
                team1Image: "images/faction/faction_uk.png",
                team2Name: OTM,
                team2Image: "images/faction/faction_otm.png",
            };
        case "mp_amiens":
            return {
                mapName: "亚眠",
                mapImage: "images/map/mp_amiens_medium.jpg",
                map2Image: "images/map/mp_amiens_any.jpg",
                team1Name: GER,
                team1Image: "images/faction/faction_ger.png",
                team2Name: UK,
                team2Image: "images/faction/faction_uk.png",
            };
        case "mp_suez":
            return {
                mapName: "苏伊士",
                mapImage: "images/map/mp_suez_medium.jpg",
                map2Image: "images/map/mp_suez_any.jpg",
                team1Name: UK,
                team1Image: "images/faction/faction_uk.png",
                team2Name: OTM,
                team2Image: "images/faction/faction_otm.png",
            };
        case "mp_faofortress":
            return {
                mapName: "法欧堡",
                mapImage: "images/map/mp_faofortress_medium.jpg",
                map2Image: "images/map/mp_faofortress_any.jpg",
                team1Name: UK,
                team1Image: "images/faction/faction_uk.png",
                team2Name: OTM,
                team2Image: "images/faction/faction_otm.png",
            };
        case "mp_giant":
            return {
                mapName: "庞然暗影",
                mapImage: "images/map/mp_giant_medium.jpg",
                map2Image: "images/map/mp_giant_any.jpg",
                team1Name: UK,
                team1Image: "images/faction/faction_uk.png",
                team2Name: GER,
                team2Image: "images/faction/faction_ger.png",
            };
        case "mp_fields":
            return {
                mapName: "苏瓦松",
                mapImage: "images/map/mp_fields_medium.jpg",
                map2Image: "images/map/mp_fields_any.jpg",
                team1Name: FRA,
                team1Image: "images/faction/faction_fra.png",
                team2Name: GER,
                team2Image: "images/faction/faction_ger.png",
            };
        case "mp_graveyard":
            return {
                mapName: "决裂",
                mapImage: "images/map/mp_graveyard_medium.jpg",
                map2Image: "images/map/mp_graveyard_any.jpg",
                team1Name: FRA,
                team1Image: "images/faction/faction_fra.png",
                team2Name: GER,
                team2Image: "images/faction/faction_ger.png",
            };
        case "mp_underworld":
            return {
                mapName: "法乌克斯要塞",
                mapImage: "images/map/mp_underworld_medium.jpg",
                map2Image: "images/map/mp_underworld_any.jpg",
                team1Name: GER,
                team1Image: "images/faction/faction_ger.png",
                team2Name: FRA,
                team2Image: "images/faction/faction_fra.png",
            };
        case "mp_verdun":
            return {
                mapName: "凡尔登高地",
                mapImage: "images/map/mp_verdun_medium.jpg",
                map2Image: "images/map/mp_verdun_any.jpg",
                team1Name: GER,
                team1Image: "images/faction/faction_ger.png",
                team2Name: FRA,
                team2Image: "images/faction/faction_fra.png",
            };
        case "mp_trench":
            return {
                mapName: "尼维尔之夜",
                mapImage: "images/map/mp_trench_medium.jpg",
                map2Image: "images/map/mp_trench_any.jpg",
                team1Name: GER,
                team1Image: "images/faction/faction_ger.png",
                team2Name: FRA,
                team2Image: "images/faction/faction_fra.png",
            };
        case "mp_shoveltown":
            return {
                mapName: "攻占托尔",
                mapImage: "images/map/mp_shoveltown_medium.jpg",
                map2Image: "images/map/mp_shoveltown_any.jpg",
                team1Name: GER,
                team1Image: "images/faction/faction_ger.png",
                team2Name: FRA,
                team2Image: "images/faction/faction_fra.png",
            };
        case "mp_bridge":
            return {
                mapName: "勃鲁希洛夫关口",
                mapImage: "images/map/mp_bridge_medium.jpg",
                map2Image: "images/map/mp_bridge_any.jpg",
                team1Name: RUS,
                team1Image: "images/faction/faction_rus.png",
                team2Name: AHU,
                team2Image: "images/faction/faction_ahu.png",
            };
        case "mp_islands":
            return {
                mapName: "阿尔比恩",
                mapImage: "images/map/mp_islands_medium.jpg",
                map2Image: "images/map/mp_islands_any.jpg",
                team1Name: GER,
                team1Image: "images/faction/faction_ger.png",
                team2Name: RUS,
                team2Image: "images/faction/faction_rus.png",
            };
        case "mp_ravines":
            return {
                mapName: "武普库夫山口",
                mapImage: "images/map/mp_ravines_medium.jpg",
                map2Image: "images/map/mp_ravines_any.jpg",
                team1Name: AHU,
                team1Image: "images/faction/faction_ahu.png",
                team2Name: RUS,
                team2Image: "images/faction/faction_rus.png",
            };
        case "mp_valley":
            return {
                mapName: "加利西亚",
                mapImage: "images/map/mp_valley_medium.jpg",
                map2Image: "images/map/mp_valley_any.jpg",
                team1Name: RUS,
                team1Image: "images/faction/faction_rus.png",
                team2Name: AHU,
                team2Image: "images/faction/faction_ahu.png",
            };
        case "mp_tsaritsyn":
            return {
                mapName: "察里津",
                mapImage: "images/map/mp_tsaritsyn_medium.jpg",
                map2Image: "images/map/mp_tsaritsyn_any.jpg",
                team1Name: BOL,
                team1Image: "images/faction/faction_bol.png",
                team2Name: WA,
                team2Image: "images/faction/faction_wa.png",
            };
        case "mp_volga":
            return {
                mapName: "窝瓦河",
                mapImage: "images/map/mp_volga_medium.jpg",
                map2Image: "images/map/mp_volga_any.jpg",
                team1Name: BOL,
                team1Image: "images/faction/faction_bol.png",
                team2Name: WA,
                team2Image: "images/faction/faction_wa.png",
            };
        case "mp_beachhead":
            return {
                mapName: "海丽丝岬",
                mapImage: "images/map/mp_beachhead_medium.jpg",
                map2Image: "images/map/mp_beachhead_any.jpg",
                team1Name: UK,
                team1Image: "images/faction/faction_uk.png",
                team2Name: OTM,
                team2Image: "images/faction/faction_otm.png",
            };
        case "mp_harbor":
            return {
                mapName: "泽布吕赫",
                mapImage: "images/map/mp_harbor_medium.jpg",
                map2Image: "images/map/mp_harbor_any.jpg",
                team1Name: UKM,
                team1Image: "images/faction/faction_ukm.png",
                team2Name: GER,
                team2Image: "images/faction/faction_ger.png",
            };
        case "mp_naval":
            return {
                mapName: "黑尔戈兰湾",
                mapImage: "images/map/mp_naval_medium.jpg",
                map2Image: "images/map/mp_naval_any.jpg",
                team1Name: UKM,
                team1Image: "images/faction/faction_ukm.png",
                team2Name: GER,
                team2Image: "images/faction/faction_ger.png",
            };
        case "mp_ridge":
            return {
                mapName: "阿奇巴巴",
                mapImage: "images/map/mp_ridge_medium.jpg",
                map2Image: "images/map/mp_ridge_any.jpg",
                team1Name: UK,
                team1Image: "images/faction/faction_uk.png",
                team2Name: OTM,
                team2Image: "images/faction/faction_otm.png",
            };
        case "mp_offensive":
            return {
                mapName: "索姆河",
                mapImage: "images/map/mp_offensive_medium.jpg",
                map2Image: "images/map/mp_offensive_any.jpg",
                team1Name: UK,
                team1Image: "images/faction/faction_uk.png",
                team2Name: GER,
                team2Image: "images/faction/faction_ger.png",
            };
        case "mp_hell":
            return {
                mapName: "帕斯尚尔",
                mapImage: "images/map/mp_hell_medium.jpg",
                map2Image: "images/map/mp_hell_any.jpg",
                team1Name: UK,
                team1Image: "images/faction/faction_uk.png",
                team2Name: GER,
                team2Image: "images/faction/faction_ger.png",
            };
        case "mp_river":
            return {
                mapName: "卡波雷托",
                mapImage: "images/map/mp_river_medium.jpg",
                map2Image: "images/map/mp_river_any.jpg",
                team1Name: AHU,
                team1Image: "images/faction/faction_ahu.png",
                team2Name: ITA,
                team2Image: "images/faction/faction_ita.png",
            };
        case "mp_alps":
            return {
                mapName: "剃刀边缘",
                mapImage: "images/map/mp_alps_medium.jpg",
                map2Image: "images/map/mp_alps_any.jpg",
                team1Name: GER,
                team1Image: "images/faction/faction_ger.png",
                team2Name: UK,
                team2Image: "images/faction/faction_uk.png",
            };
        case "mp_blitz":
            return {
                mapName: "伦敦的呼唤：夜袭",
                mapImage: "images/map/mp_blitz_medium.jpg",
                map2Image: "images/map/mp_blitz_any.jpg",
                team1Name: GER,
                team1Image: "images/faction/faction_ger.png",
                team2Name: UK,
                team2Image: "images/faction/faction_uk.png",
            };
        case "mp_london":
            return {
                mapName: "伦敦的呼唤：灾祸",
                mapImage: "images/map/mp_london_medium.jpg",
                map2Image: "images/map/mp_london_any.jpg",
                team1Name: GER,
                team1Image: "images/faction/faction_ger.png",
                team2Name: UK,
                team2Image: "images/faction/faction_uk.png",
            };
        default:
            return {};
    }
}

function getRankImage(rank) {
    switch (rank) {
        case 0:
            return "images/rank/rank-0.png";
        case 1:
            return "images/rank/rank-1.png";
        case 2:
            return "images/rank/rank-2.png";
        case 3:
            return "images/rank/rank-3.png";
        case 4:
            return "images/rank/rank-4.png";
        case 5:
            return "images/rank/rank-5.png";
        case 6:
            return "images/rank/rank-6.png";
        case 7:
            return "images/rank/rank-7.png";
        case 8:
            return "images/rank/rank-8.png";
        case 9:
            return "images/rank/rank-9.png";
        case 10:
            return "images/rank/rank-10.png";
        case 11:
            return "images/rank/rank-11.png";
        case 12:
            return "images/rank/rank-12.png";
        case 13:
            return "images/rank/rank-13.png";
        case 14:
            return "images/rank/rank-14.png";
        case 15:
            return "images/rank/rank-15.png";
        case 16:
            return "images/rank/rank-16.png";
        case 17:
            return "images/rank/rank-17.png";
        case 18:
            return "images/rank/rank-18.png";
        case 19:
            return "images/rank/rank-19.png";
        case 20:
            return "images/rank/rank-20.png";
        case 21:
            return "images/rank/rank-21.png";
        case 22:
            return "images/rank/rank-22.png";
        case 23:
            return "images/rank/rank-23.png";
        case 24:
            return "images/rank/rank-24.png";
        case 25:
            return "images/rank/rank-25.png";
        case 26:
            return "images/rank/rank-26.png";
        case 27:
            return "images/rank/rank-27.png";
        case 28:
            return "images/rank/rank-28.png";
        case 29:
            return "images/rank/rank-29.png";
        case 30:
            return "images/rank/rank-30.png";
        case 31:
            return "images/rank/rank-31.png";
        case 32:
            return "images/rank/rank-32.png";
        case 33:
            return "images/rank/rank-33.png";
        case 34:
            return "images/rank/rank-34.png";
        case 35:
            return "images/rank/rank-35.png";
        case 36:
            return "images/rank/rank-36.png";
        case 37:
            return "images/rank/rank-37.png";
        case 38:
            return "images/rank/rank-38.png";
        case 39:
            return "images/rank/rank-39.png";
        case 40:
            return "images/rank/rank-40.png";
        case 41:
            return "images/rank/rank-41.png";
        case 42:
            return "images/rank/rank-42.png";
        case 43:
            return "images/rank/rank-43.png";
        case 44:
            return "images/rank/rank-44.png";
        case 45:
            return "images/rank/rank-45.png";
        case 46:
            return "images/rank/rank-46.png";
        case 47:
            return "images/rank/rank-47.png";
        case 48:
            return "images/rank/rank-48.png";
        case 49:
            return "images/rank/rank-49.png";
        case 50:
            return "images/rank/rank-50.png";
        case 51:
            return "images/rank/rank-51.png";
        case 52:
            return "images/rank/rank-52.png";
        case 53:
            return "images/rank/rank-53.png";
        case 54:
            return "images/rank/rank-54.png";
        case 55:
            return "images/rank/rank-55.png";
        case 56:
            return "images/rank/rank-56.png";
        case 57:
            return "images/rank/rank-57.png";
        case 58:
            return "images/rank/rank-58.png";
        case 59:
            return "images/rank/rank-59.png";
        case 60:
            return "images/rank/rank-60.png";
        case 61:
            return "images/rank/rank-61.png";
        case 62:
            return "images/rank/rank-62.png";
        case 63:
            return "images/rank/rank-63.png";
        case 64:
            return "images/rank/rank-64.png";
        case 65:
            return "images/rank/rank-65.png";
        case 66:
            return "images/rank/rank-66.png";
        case 67:
            return "images/rank/rank-67.png";
        case 68:
            return "images/rank/rank-68.png";
        case 69:
            return "images/rank/rank-69.png";
        case 70:
            return "images/rank/rank-70.png";
        case 71:
            return "images/rank/rank-71.png";
        case 72:
            return "images/rank/rank-72.png";
        case 73:
            return "images/rank/rank-73.png";
        case 74:
            return "images/rank/rank-74.png";
        case 75:
            return "images/rank/rank-75.png";
        case 76:
            return "images/rank/rank-76.png";
        case 77:
            return "images/rank/rank-77.png";
        case 78:
            return "images/rank/rank-78.png";
        case 79:
            return "images/rank/rank-79.png";
        case 80:
            return "images/rank/rank-80.png";
        case 81:
            return "images/rank/rank-81.png";
        case 82:
            return "images/rank/rank-82.png";
        case 83:
            return "images/rank/rank-83.png";
        case 84:
            return "images/rank/rank-84.png";
        case 85:
            return "images/rank/rank-85.png";
        case 86:
            return "images/rank/rank-86.png";
        case 87:
            return "images/rank/rank-87.png";
        case 88:
            return "images/rank/rank-88.png";
        case 89:
            return "images/rank/rank-89.png";
        case 90:
            return "images/rank/rank-90.png";
        case 91:
            return "images/rank/rank-91.png";
        case 92:
            return "images/rank/rank-92.png";
        case 93:
            return "images/rank/rank-93.png";
        case 94:
            return "images/rank/rank-94.png";
        case 95:
            return "images/rank/rank-95.png";
        case 96:
            return "images/rank/rank-96.png";
        case 97:
            return "images/rank/rank-97.png";
        case 98:
            return "images/rank/rank-98.png";
        case 99:
            return "images/rank/rank-99.png";
        case 100:
            return "images/rank/rank-100.png";
        case 101:
            return "images/rank/rank-101.png";
        case 102:
            return "images/rank/rank-102.png";
        case 103:
            return "images/rank/rank-103.png";
        case 104:
            return "images/rank/rank-104.png";
        case 105:
            return "images/rank/rank-105.png";
        case 106:
            return "images/rank/rank-106.png";
        case 107:
            return "images/rank/rank-107.png";
        case 108:
            return "images/rank/rank-108.png";
        case 109:
            return "images/rank/rank-109.png";
        case 110:
            return "images/rank/rank-110.png";
        case 111:
            return "images/rank/rank-111.png";
        case 112:
            return "images/rank/rank-112.png";
        case 113:
            return "images/rank/rank-113.png";
        case 114:
            return "images/rank/rank-114.png";
        case 115:
            return "images/rank/rank-115.png";
        case 116:
            return "images/rank/rank-116.png";
        case 117:
            return "images/rank/rank-117.png";
        case 118:
            return "images/rank/rank-118.png";
        case 119:
            return "images/rank/rank-119.png";
        case 120:
            return "images/rank/rank-120.png";
        case 121:
            return "images/rank/rank-121.png";
        case 122:
            return "images/rank/rank-122.png";
        case 123:
            return "images/rank/rank-123.png";
        case 124:
            return "images/rank/rank-124.png";
        case 125:
            return "images/rank/rank-125.png";
        case 126:
            return "images/rank/rank-126.png";
        case 127:
            return "images/rank/rank-127.png";
        case 128:
            return "images/rank/rank-128.png";
        case 129:
            return "images/rank/rank-129.png";
        case 130:
            return "images/rank/rank-130.png";
        case 131:
            return "images/rank/rank-131.png";
        case 132:
            return "images/rank/rank-132.png";
        case 133:
            return "images/rank/rank-133.png";
        case 134:
            return "images/rank/rank-134.png";
        case 135:
            return "images/rank/rank-135.png";
        case 136:
            return "images/rank/rank-136.png";
        case 137:
            return "images/rank/rank-137.png";
        case 138:
            return "images/rank/rank-138.png";
        case 139:
            return "images/rank/rank-139.png";
        case 140:
            return "images/rank/rank-140.png";
        case 141:
            return "images/rank/rank-141.png";
        case 142:
            return "images/rank/rank-142.png";
        case 143:
            return "images/rank/rank-143.png";
        case 144:
            return "images/rank/rank-144.png";
        case 145:
            return "images/rank/rank-145.png";
        case 146:
            return "images/rank/rank-146.png";
        case 147:
            return "images/rank/rank-147.png";
        case 148:
            return "images/rank/rank-148.png";
        case 149:
            return "images/rank/rank-149.png";
        case 150:
            return "images/rank/rank-150.png";
        default:
            return rank;
    }
}

export {
    getFilterString,
    isOfficialServer,
    getPingImageMore,
    getCountryImage,
    getServerImageMore,
    getRankImage
};