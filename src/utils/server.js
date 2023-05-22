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
                image: "/public/images/ping/ping-best.png",
                ping: 34
            };
        case "jp":
            return {
                image: "/public/images/ping/ping-good.png",
                ping: 56
            };
        case "de":
            return {
                image: "/public/images/ping/ping-ok.png",
                ping: 149
            };
        case "au":
            return {
                image: "/public/images/ping/ping-bad.png",
                ping: 180
            };
        case "us":
            return {
                image: "/public/images/ping/ping-worst.png",
                ping: 206
            };
        case "br":
            return {
                image: "/public/images/ping/ping-worst.png",
                ping: 231
            };
        default:
            return {
                image: "/public/images/ping/ping-unknown.png",
                ping: 300
            };
    }
}

function getCountryImage(country) {
    switch (country.toLowerCase()) {
        case "ad":
            return "/public/images/country/country-ad.png";
        case "ae":
            return "/public/images/country/country-ae.png";
        case "af":
            return "/public/images/country/country-af.png";
        case "ag":
            return "/public/images/country/country-ag.png";
        case "ai":
            return "/public/images/country/country-ai.png";
        case "al":
            return "/public/images/country/country-al.png";
        case "am":
            return "/public/images/country/country-am.png";
        case "an":
            return "/public/images/country/country-an.png";
        case "ao":
            return "/public/images/country/country-ao.png";
        case "aq":
            return "/public/images/country/country-aq.png";
        case "ar":
            return "/public/images/country/country-ar.png";
        case "as":
            return "/public/images/country/country-as.png";
        case "at":
            return "/public/images/country/country-at.png";
        case "au":
            return "/public/images/country/country-au.png";
        case "aw":
            return "/public/images/country/country-aw.png";
        case "ax":
            return "/public/images/country/country-ax.png";
        case "az":
            return "/public/images/country/country-az.png";
        case "ba":
            return "/public/images/country/country-ba.png";
        case "bb":
            return "/public/images/country/country-bb.png";
        case "bd":
            return "/public/images/country/country-bd.png";
        case "be":
            return "/public/images/country/country-be.png";
        case "bf":
            return "/public/images/country/country-bf.png";
        case "bg":
            return "/public/images/country/country-bg.png";
        case "bh":
            return "/public/images/country/country-bh.png";
        case "bi":
            return "/public/images/country/country-bi.png";
        case "bj":
            return "/public/images/country/country-bj.png";
        case "bl":
            return "/public/images/country/country-bl.png";
        case "bm":
            return "/public/images/country/country-bm.png";
        case "bn":
            return "/public/images/country/country-bn.png";
        case "bo":
            return "/public/images/country/country-bo.png";
        case "br":
            return "/public/images/country/country-br.png";
        case "bs":
            return "/public/images/country/country-bs.png";
        case "bt":
            return "/public/images/country/country-bt.png";
        case "bw":
            return "/public/images/country/country-bw.png";
        case "by":
            return "/public/images/country/country-by.png";
        case "bz":
            return "/public/images/country/country-bz.png";
        case "ca":
            return "/public/images/country/country-ca.png";
        case "cc":
            return "/public/images/country/country-cc.png";
        case "cd":
            return "/public/images/country/country-cd.png";
        case "cf":
            return "/public/images/country/country-cf.png";
        case "cg":
            return "/public/images/country/country-cg.png";
        case "ch":
            return "/public/images/country/country-ch.png";
        case "ci":
            return "/public/images/country/country-ci.png";
        case "ck":
            return "/public/images/country/country-ck.png";
        case "cl":
            return "/public/images/country/country-cl.png";
        case "cm":
            return "/public/images/country/country-cm.png";
        case "cn":
            return "/public/images/country/country-cn.png";
        case "co":
            return "/public/images/country/country-co.png";
        case "cr":
            return "/public/images/country/country-cr.png";
        case "cu":
            return "/public/images/country/country-cu.png";
        case "cv":
            return "/public/images/country/country-cv.png";
        case "cw":
            return "/public/images/country/country-cw.png";
        case "cx":
            return "/public/images/country/country-cx.png";
        case "cy":
            return "/public/images/country/country-cy.png";
        case "cz":
            return "/public/images/country/country-cz.png";
        case "de":
            return "/public/images/country/country-de.png";
        case "dj":
            return "/public/images/country/country-dj.png";
        case "dk":
            return "/public/images/country/country-dk.png";
        case "dm":
            return "/public/images/country/country-dm.png";
        case "do":
            return "/public/images/country/country-do.png";
        case "dz":
            return "/public/images/country/country-dz.png";
        case "ec":
            return "/public/images/country/country-ec.png";
        case "ee":
            return "/public/images/country/country-ee.png";
        case "eg":
            return "/public/images/country/country-eg.png";
        case "eh":
            return "/public/images/country/country-eh.png";
        case "er":
            return "/public/images/country/country-er.png";
        case "es":
            return "/public/images/country/country-es.png";
        case "et":
            return "/public/images/country/country-et.png";
        case "eu":
            return "/public/images/country/country-eu.png";
        case "fi":
            return "/public/images/country/country-fi.png";
        case "fj":
            return "/public/images/country/country-fj.png";
        case "fk":
            return "/public/images/country/country-fk.png";
        case "fm":
            return "/public/images/country/country-fm.png";
        case "fo":
            return "/public/images/country/country-fo.png";
        case "fr":
            return "/public/images/country/country-fr.png";
        case "ga":
            return "/public/images/country/country-ga.png";
        case "gb":
            return "/public/images/country/country-gb.png";
        case "gd":
            return "/public/images/country/country-gd.png";
        case "ge":
            return "/public/images/country/country-ge.png";
        case "gg":
            return "/public/images/country/country-gg.png";
        case "gh":
            return "/public/images/country/country-gh.png";
        case "gi":
            return "/public/images/country/country-gi.png";
        case "gl":
            return "/public/images/country/country-gl.png";
        case "gm":
            return "/public/images/country/country-gm.png";
        case "gn":
            return "/public/images/country/country-gn.png";
        case "gq":
            return "/public/images/country/country-gq.png";
        case "gr":
            return "/public/images/country/country-gr.png";
        case "gs":
            return "/public/images/country/country-gs.png";
        case "gt":
            return "/public/images/country/country-gt.png";
        case "gu":
            return "/public/images/country/country-gu.png";
        case "gw":
            return "/public/images/country/country-gw.png";
        case "gy":
            return "/public/images/country/country-gy.png";
        case "hk":
            return "/public/images/country/country-hk.png";
        case "hn":
            return "/public/images/country/country-hn.png";
        case "hr":
            return "/public/images/country/country-hr.png";
        case "ht":
            return "/public/images/country/country-ht.png";
        case "hu":
            return "/public/images/country/country-hu.png";
        case "ic":
            return "/public/images/country/country-ic.png";
        case "id":
            return "/public/images/country/country-id.png";
        case "ie":
            return "/public/images/country/country-ie.png";
        case "il":
            return "/public/images/country/country-il.png";
        case "im":
            return "/public/images/country/country-im.png";
        case "in":
            return "/public/images/country/country-in.png";
        case "iq":
            return "/public/images/country/country-iq.png";
        case "ir":
            return "/public/images/country/country-ir.png";
        case "is":
            return "/public/images/country/country-is.png";
        case "it":
            return "/public/images/country/country-it.png";
        case "je":
            return "/public/images/country/country-je.png";
        case "jm":
            return "/public/images/country/country-jm.png";
        case "jo":
            return "/public/images/country/country-jo.png";
        case "jp":
            return "/public/images/country/country-jp.png";
        case "ke":
            return "/public/images/country/country-ke.png";
        case "kg":
            return "/public/images/country/country-kg.png";
        case "kh":
            return "/public/images/country/country-kh.png";
        case "ki":
            return "/public/images/country/country-ki.png";
        case "km":
            return "/public/images/country/country-km.png";
        case "kn":
            return "/public/images/country/country-kn.png";
        case "kp":
            return "/public/images/country/country-kp.png";
        case "kr":
            return "/public/images/country/country-kr.png";
        case "kw":
            return "/public/images/country/country-kw.png";
        case "ky":
            return "/public/images/country/country-ky.png";
        case "kz":
            return "/public/images/country/country-kz.png";
        case "la":
            return "/public/images/country/country-la.png";
        case "lb":
            return "/public/images/country/country-lb.png";
        case "lc":
            return "/public/images/country/country-lc.png";
        case "li":
            return "/public/images/country/country-li.png";
        case "lk":
            return "/public/images/country/country-lk.png";
        case "lr":
            return "/public/images/country/country-lr.png";
        case "ls":
            return "/public/images/country/country-ls.png";
        case "lt":
            return "/public/images/country/country-lt.png";
        case "lu":
            return "/public/images/country/country-lu.png";
        case "lv":
            return "/public/images/country/country-lv.png";
        case "ly":
            return "/public/images/country/country-ly.png";
        case "ma":
            return "/public/images/country/country-ma.png";
        case "md":
            return "/public/images/country/country-md.png";
        case "me":
            return "/public/images/country/country-me.png";
        case "mf":
            return "/public/images/country/country-mf.png";
        case "mg":
            return "/public/images/country/country-mg.png";
        case "mh":
            return "/public/images/country/country-mh.png";
        case "mk":
            return "/public/images/country/country-mk.png";
        case "ml":
            return "/public/images/country/country-ml.png";
        case "mm":
            return "/public/images/country/country-mm.png";
        case "mn":
            return "/public/images/country/country-mn.png";
        case "mo":
            return "/public/images/country/country-mo.png";
        case "mp":
            return "/public/images/country/country-mp.png";
        case "mq":
            return "/public/images/country/country-mq.png";
        case "mr":
            return "/public/images/country/country-mr.png";
        case "ms":
            return "/public/images/country/country-ms.png";
        case "mt":
            return "/public/images/country/country-mt.png";
        case "mu":
            return "/public/images/country/country-mu.png";
        case "mv":
            return "/public/images/country/country-mv.png";
        case "mw":
            return "/public/images/country/country-mw.png";
        case "mx":
            return "/public/images/country/country-mx.png";
        case "my":
            return "/public/images/country/country-my.png";
        case "mz":
            return "/public/images/country/country-mz.png";
        case "na":
            return "/public/images/country/country-na.png";
        case "nc":
            return "/public/images/country/country-nc.png";
        case "ne":
            return "/public/images/country/country-ne.png";
        case "nf":
            return "/public/images/country/country-nf.png";
        case "ng":
            return "/public/images/country/country-ng.png";
        case "ni":
            return "/public/images/country/country-ni.png";
        case "nl":
            return "/public/images/country/country-nl.png";
        case "no":
            return "/public/images/country/country-no.png";
        case "np":
            return "/public/images/country/country-np.png";
        case "nr":
            return "/public/images/country/country-nr.png";
        case "nu":
            return "/public/images/country/country-nu.png";
        case "nz":
            return "/public/images/country/country-nz.png";
        case "om":
            return "/public/images/country/country-om.png";
        case "pa":
            return "/public/images/country/country-pa.png";
        case "pe":
            return "/public/images/country/country-pe.png";
        case "pf":
            return "/public/images/country/country-pf.png";
        case "pg":
            return "/public/images/country/country-pg.png";
        case "ph":
            return "/public/images/country/country-ph.png";
        case "pk":
            return "/public/images/country/country-pk.png";
        case "pl":
            return "/public/images/country/country-pl.png";
        case "pn":
            return "/public/images/country/country-pn.png";
        case "pr":
            return "/public/images/country/country-pr.png";
        case "ps":
            return "/public/images/country/country-ps.png";
        case "pt":
            return "/public/images/country/country-pt.png";
        case "pw":
            return "/public/images/country/country-pw.png";
        case "py":
            return "/public/images/country/country-py.png";
        case "qa":
            return "/public/images/country/country-qa.png";
        case "ro":
            return "/public/images/country/country-ro.png";
        case "rs":
            return "/public/images/country/country-rs.png";
        case "ru":
            return "/public/images/country/country-ru.png";
        case "rw":
            return "/public/images/country/country-rw.png";
        case "sa":
            return "/public/images/country/country-sa.png";
        case "sb":
            return "/public/images/country/country-sb.png";
        case "sc":
            return "/public/images/country/country-sc.png";
        case "sd":
            return "/public/images/country/country-sd.png";
        case "se":
            return "/public/images/country/country-se.png";
        case "sg":
            return "/public/images/country/country-sg.png";
        case "sh":
            return "/public/images/country/country-sh.png";
        case "si":
            return "/public/images/country/country-si.png";
        case "sk":
            return "/public/images/country/country-sk.png";
        case "sl":
            return "/public/images/country/country-sl.png";
        case "sm":
            return "/public/images/country/country-sm.png";
        case "sn":
            return "/public/images/country/country-sn.png";
        case "so":
            return "/public/images/country/country-so.png";
        case "sr":
            return "/public/images/country/country-sr.png";
        case "ss":
            return "/public/images/country/country-ss.png";
        case "st":
            return "/public/images/country/country-st.png";
        case "sv":
            return "/public/images/country/country-sv.png";
        case "sy":
            return "/public/images/country/country-sy.png";
        case "sz":
            return "/public/images/country/country-sz.png";
        case "tc":
            return "/public/images/country/country-tc.png";
        case "td":
            return "/public/images/country/country-td.png";
        case "tf":
            return "/public/images/country/country-tf.png";
        case "tg":
            return "/public/images/country/country-tg.png";
        case "th":
            return "/public/images/country/country-th.png";
        case "tj":
            return "/public/images/country/country-tj.png";
        case "tk":
            return "/public/images/country/country-tk.png";
        case "tl":
            return "/public/images/country/country-tl.png";
        case "tm":
            return "/public/images/country/country-tm.png";
        case "tn":
            return "/public/images/country/country-tn.png";
        case "to":
            return "/public/images/country/country-to.png";
        case "tr":
            return "/public/images/country/country-tr.png";
        case "tt":
            return "/public/images/country/country-tt.png";
        case "tv":
            return "/public/images/country/country-tv.png";
        case "tw":
            return "/public/images/country/country-tw.png";
        case "tz":
            return "/public/images/country/country-tz.png";
        case "ua":
            return "/public/images/country/country-ua.png";
        case "ug":
            return "/public/images/country/country-ug.png";
        case "us":
            return "/public/images/country/country-us.png";
        case "uy":
            return "/public/images/country/country-uy.png";
        case "uz":
            return "/public/images/country/country-uz.png";
        case "va":
            return "/public/images/country/country-va.png";
        case "vc":
            return "/public/images/country/country-vc.png";
        case "ve":
            return "/public/images/country/country-ve.png";
        case "vg":
            return "/public/images/country/country-vg.png";
        case "vi":
            return "/public/images/country/country-vi.png";
        case "vn":
            return "/public/images/country/country-vn.png";
        case "vu":
            return "/public/images/country/country-vu.png";
        case "wf":
            return "/public/images/country/country-wf.png";
        case "ws":
            return "/public/images/country/country-ws.png";
        case "ye":
            return "/public/images/country/country-ye.png";
        case "yt":
            return "/public/images/country/country-yt.png";
        case "za":
            return "/public/images/country/country-za.png";
        case "zm":
            return "/public/images/country/country-zm.png";
        case "zw":
            return "/public/images/country/country-zw.png";
        default:
            return "/public/images/country/country-default.png";
    }
}

function getServerImageMore(map) {
    switch (map.toLowerCase()) {
        case "mp_mountainfort":
            return {
                mapName: "格拉巴山",
                mapImage: "/public/images/map/mp_mountainfort_medium.jpg",
                map2Image: "/public/images/map/mp_mountainfort_any.jpg",
                team1Name: ITA,
                team1Image: "/public/images/faction/faction_ita.png",
                team2Name: AHU,
                team2Image: "/public/images/faction/faction_ahu.png",
            };
        case "mp_forest":
            return {
                mapName: "阿尔贡森林",
                mapImage: "/public/images/map/mp_forest_medium.jpg",
                map2Image: "/public/images/map/mp_forest_any.jpg",
                team1Name: USA,
                team1Image: "/public/images/faction/faction_usa.png",
                team2Name: GER,
                team2Image: "/public/images/faction/faction_ger.png",
            };
        case "mp_italiancoast":
            return {
                mapName: "帝国边境",
                mapImage: "/public/images/map/mp_italiancoast_medium.jpg",
                map2Image: "/public/images/map/mp_italiancoast_any.jpg",
                team1Name: ITA,
                team1Image: "/public/images/faction/faction_ita.png",
                team2Name: AHU,
                team2Image: "/public/images/faction/faction_ahu.png",
            };
        case "mp_chateau":
            return {
                mapName: "流血宴厅",
                mapImage: "/public/images/map/mp_chateau_medium.jpg",
                map2Image: "/public/images/map/mp_chateau_any.jpg",
                team1Name: USA,
                team1Image: "/public/images/faction/faction_usa.png",
                team2Name: GER,
                team2Image: "/public/images/faction/faction_ger.png",
            };
        case "mp_scar":
            return {
                mapName: "圣康坦的伤痕",
                mapImage: "/public/images/map/mp_scar_medium.jpg",
                map2Image: "/public/images/map/mp_scar_any.jpg",
                team1Name: GER,
                team1Image: "/public/images/faction/faction_ger.png",
                team2Name: UK,
                team2Image: "/public/images/faction/faction_uk.png",
            };
        case "mp_desert":
            return {
                mapName: "西奈沙漠",
                mapImage: "/public/images/map/mp_desert_medium.jpg",
                map2Image: "/public/images/map/mp_desert_any.jpg",
                team1Name: UK,
                team1Image: "/public/images/faction/faction_uk.png",
                team2Name: OTM,
                team2Image: "/public/images/faction/faction_otm.png",
            };
        case "mp_amiens":
            return {
                mapName: "亚眠",
                mapImage: "/public/images/map/mp_amiens_medium.jpg",
                map2Image: "/public/images/map/mp_amiens_any.jpg",
                team1Name: GER,
                team1Image: "/public/images/faction/faction_ger.png",
                team2Name: UK,
                team2Image: "/public/images/faction/faction_uk.png",
            };
        case "mp_suez":
            return {
                mapName: "苏伊士",
                mapImage: "/public/images/map/mp_suez_medium.jpg",
                map2Image: "/public/images/map/mp_suez_any.jpg",
                team1Name: UK,
                team1Image: "/public/images/faction/faction_uk.png",
                team2Name: OTM,
                team2Image: "/public/images/faction/faction_otm.png",
            };
        case "mp_faofortress":
            return {
                mapName: "法欧堡",
                mapImage: "/public/images/map/mp_faofortress_medium.jpg",
                map2Image: "/public/images/map/mp_faofortress_any.jpg",
                team1Name: UK,
                team1Image: "/public/images/faction/faction_uk.png",
                team2Name: OTM,
                team2Image: "/public/images/faction/faction_otm.png",
            };
        case "mp_giant":
            return {
                mapName: "庞然暗影",
                mapImage: "/public/images/map/mp_giant_medium.jpg",
                map2Image: "/public/images/map/mp_giant_any.jpg",
                team1Name: UK,
                team1Image: "/public/images/faction/faction_uk.png",
                team2Name: GER,
                team2Image: "/public/images/faction/faction_ger.png",
            };
        case "mp_fields":
            return {
                mapName: "苏瓦松",
                mapImage: "/public/images/map/mp_fields_medium.jpg",
                map2Image: "/public/images/map/mp_fields_any.jpg",
                team1Name: FRA,
                team1Image: "/public/images/faction/faction_fra.png",
                team2Name: GER,
                team2Image: "/public/images/faction/faction_ger.png",
            };
        case "mp_graveyard":
            return {
                mapName: "决裂",
                mapImage: "/public/images/map/mp_graveyard_medium.jpg",
                map2Image: "/public/images/map/mp_graveyard_any.jpg",
                team1Name: FRA,
                team1Image: "/public/images/faction/faction_fra.png",
                team2Name: GER,
                team2Image: "/public/images/faction/faction_ger.png",
            };
        case "mp_underworld":
            return {
                mapName: "法乌克斯要塞",
                mapImage: "/public/images/map/mp_underworld_medium.jpg",
                map2Image: "/public/images/map/mp_underworld_any.jpg",
                team1Name: GER,
                team1Image: "/public/images/faction/faction_ger.png",
                team2Name: FRA,
                team2Image: "/public/images/faction/faction_fra.png",
            };
        case "mp_verdun":
            return {
                mapName: "凡尔登高地",
                mapImage: "/public/images/map/mp_verdun_medium.jpg",
                map2Image: "/public/images/map/mp_verdun_any.jpg",
                team1Name: GER,
                team1Image: "/public/images/faction/faction_ger.png",
                team2Name: FRA,
                team2Image: "/public/images/faction/faction_fra.png",
            };
        case "mp_trench":
            return {
                mapName: "尼维尔之夜",
                mapImage: "/public/images/map/mp_trench_medium.jpg",
                map2Image: "/public/images/map/mp_trench_any.jpg",
                team1Name: GER,
                team1Image: "/public/images/faction/faction_ger.png",
                team2Name: FRA,
                team2Image: "/public/images/faction/faction_fra.png",
            };
        case "mp_shoveltown":
            return {
                mapName: "攻占托尔",
                mapImage: "/public/images/map/mp_shoveltown_medium.jpg",
                map2Image: "/public/images/map/mp_shoveltown_any.jpg",
                team1Name: GER,
                team1Image: "/public/images/faction/faction_ger.png",
                team2Name: FRA,
                team2Image: "/public/images/faction/faction_fra.png",
            };
        case "mp_bridge":
            return {
                mapName: "勃鲁希洛夫关口",
                mapImage: "/public/images/map/mp_bridge_medium.jpg",
                map2Image: "/public/images/map/mp_bridge_any.jpg",
                team1Name: RUS,
                team1Image: "/public/images/faction/faction_rus.png",
                team2Name: AHU,
                team2Image: "/public/images/faction/faction_ahu.png",
            };
        case "mp_islands":
            return {
                mapName: "阿尔比恩",
                mapImage: "/public/images/map/mp_islands_medium.jpg",
                map2Image: "/public/images/map/mp_islands_any.jpg",
                team1Name: GER,
                team1Image: "/public/images/faction/faction_ger.png",
                team2Name: RUS,
                team2Image: "/public/images/faction/faction_rus.png",
            };
        case "mp_ravines":
            return {
                mapName: "武普库夫山口",
                mapImage: "/public/images/map/mp_ravines_medium.jpg",
                map2Image: "/public/images/map/mp_ravines_any.jpg",
                team1Name: AHU,
                team1Image: "/public/images/faction/faction_ahu.png",
                team2Name: RUS,
                team2Image: "/public/images/faction/faction_rus.png",
            };
        case "mp_valley":
            return {
                mapName: "加利西亚",
                mapImage: "/public/images/map/mp_valley_medium.jpg",
                map2Image: "/public/images/map/mp_valley_any.jpg",
                team1Name: RUS,
                team1Image: "/public/images/faction/faction_rus.png",
                team2Name: AHU,
                team2Image: "/public/images/faction/faction_ahu.png",
            };
        case "mp_tsaritsyn":
            return {
                mapName: "察里津",
                mapImage: "/public/images/map/mp_tsaritsyn_medium.jpg",
                map2Image: "/public/images/map/mp_tsaritsyn_any.jpg",
                team1Name: BOL,
                team1Image: "/public/images/faction/faction_bol.png",
                team2Name: WA,
                team2Image: "/public/images/faction/faction_wa.png",
            };
        case "mp_volga":
            return {
                mapName: "窝瓦河",
                mapImage: "/public/images/map/mp_volga_medium.jpg",
                map2Image: "/public/images/map/mp_volga_any.jpg",
                team1Name: BOL,
                team1Image: "/public/images/faction/faction_bol.png",
                team2Name: WA,
                team2Image: "/public/images/faction/faction_wa.png",
            };
        case "mp_beachhead":
            return {
                mapName: "海丽丝岬",
                mapImage: "/public/images/map/mp_beachhead_medium.jpg",
                map2Image: "/public/images/map/mp_beachhead_any.jpg",
                team1Name: UK,
                team1Image: "/public/images/faction/faction_uk.png",
                team2Name: OTM,
                team2Image: "/public/images/faction/faction_otm.png",
            };
        case "mp_harbor":
            return {
                mapName: "泽布吕赫",
                mapImage: "/public/images/map/mp_harbor_medium.jpg",
                map2Image: "/public/images/map/mp_harbor_any.jpg",
                team1Name: UKM,
                team1Image: "/public/images/faction/faction_ukm.png",
                team2Name: GER,
                team2Image: "/public/images/faction/faction_ger.png",
            };
        case "mp_naval":
            return {
                mapName: "黑尔戈兰湾",
                mapImage: "/public/images/map/mp_naval_medium.jpg",
                map2Image: "/public/images/map/mp_naval_any.jpg",
                team1Name: UKM,
                team1Image: "/public/images/faction/faction_ukm.png",
                team2Name: GER,
                team2Image: "/public/images/faction/faction_ger.png",
            };
        case "mp_ridge":
            return {
                mapName: "阿奇巴巴",
                mapImage: "/public/images/map/mp_ridge_medium.jpg",
                map2Image: "/public/images/map/mp_ridge_any.jpg",
                team1Name: UK,
                team1Image: "/public/images/faction/faction_uk.png",
                team2Name: OTM,
                team2Image: "/public/images/faction/faction_otm.png",
            };
        case "mp_offensive":
            return {
                mapName: "索姆河",
                mapImage: "/public/images/map/mp_offensive_medium.jpg",
                map2Image: "/public/images/map/mp_offensive_any.jpg",
                team1Name: UK,
                team1Image: "/public/images/faction/faction_uk.png",
                team2Name: GER,
                team2Image: "/public/images/faction/faction_ger.png",
            };
        case "mp_hell":
            return {
                mapName: "帕斯尚尔",
                mapImage: "/public/images/map/mp_hell_medium.jpg",
                map2Image: "/public/images/map/mp_hell_any.jpg",
                team1Name: UK,
                team1Image: "/public/images/faction/faction_uk.png",
                team2Name: GER,
                team2Image: "/public/images/faction/faction_ger.png",
            };
        case "mp_river":
            return {
                mapName: "卡波雷托",
                mapImage: "/public/images/map/mp_river_medium.jpg",
                map2Image: "/public/images/map/mp_river_any.jpg",
                team1Name: AHU,
                team1Image: "/public/images/faction/faction_ahu.png",
                team2Name: ITA,
                team2Image: "/public/images/faction/faction_ita.png",
            };
        case "mp_alps":
            return {
                mapName: "剃刀边缘",
                mapImage: "/public/images/map/mp_alps_medium.jpg",
                map2Image: "/public/images/map/mp_alps_any.jpg",
                team1Name: GER,
                team1Image: "/public/images/faction/faction_ger.png",
                team2Name: UK,
                team2Image: "/public/images/faction/faction_uk.png",
            };
        case "mp_blitz":
            return {
                mapName: "伦敦的呼唤：夜袭",
                mapImage: "/public/images/map/mp_blitz_medium.jpg",
                map2Image: "/public/images/map/mp_blitz_any.jpg",
                team1Name: GER,
                team1Image: "/public/images/faction/faction_ger.png",
                team2Name: UK,
                team2Image: "/public/images/faction/faction_uk.png",
            };
        case "mp_london":
            return {
                mapName: "伦敦的呼唤：灾祸",
                mapImage: "/public/images/map/mp_london_medium.jpg",
                map2Image: "/public/images/map/mp_london_any.jpg",
                team1Name: GER,
                team1Image: "/public/images/faction/faction_ger.png",
                team2Name: UK,
                team2Image: "/public/images/faction/faction_uk.png",
            };
        default:
            return {};
    }
}

function getRankImage(rank) {
    switch (rank) {
        case 0:
            return "/public/images/rank/rank-0.png";
        case 1:
            return "/public/images/rank/rank-1.png";
        case 2:
            return "/public/images/rank/rank-2.png";
        case 3:
            return "/public/images/rank/rank-3.png";
        case 4:
            return "/public/images/rank/rank-4.png";
        case 5:
            return "/public/images/rank/rank-5.png";
        case 6:
            return "/public/images/rank/rank-6.png";
        case 7:
            return "/public/images/rank/rank-7.png";
        case 8:
            return "/public/images/rank/rank-8.png";
        case 9:
            return "/public/images/rank/rank-9.png";
        case 10:
            return "/public/images/rank/rank-10.png";
        case 11:
            return "/public/images/rank/rank-11.png";
        case 12:
            return "/public/images/rank/rank-12.png";
        case 13:
            return "/public/images/rank/rank-13.png";
        case 14:
            return "/public/images/rank/rank-14.png";
        case 15:
            return "/public/images/rank/rank-15.png";
        case 16:
            return "/public/images/rank/rank-16.png";
        case 17:
            return "/public/images/rank/rank-17.png";
        case 18:
            return "/public/images/rank/rank-18.png";
        case 19:
            return "/public/images/rank/rank-19.png";
        case 20:
            return "/public/images/rank/rank-20.png";
        case 21:
            return "/public/images/rank/rank-21.png";
        case 22:
            return "/public/images/rank/rank-22.png";
        case 23:
            return "/public/images/rank/rank-23.png";
        case 24:
            return "/public/images/rank/rank-24.png";
        case 25:
            return "/public/images/rank/rank-25.png";
        case 26:
            return "/public/images/rank/rank-26.png";
        case 27:
            return "/public/images/rank/rank-27.png";
        case 28:
            return "/public/images/rank/rank-28.png";
        case 29:
            return "/public/images/rank/rank-29.png";
        case 30:
            return "/public/images/rank/rank-30.png";
        case 31:
            return "/public/images/rank/rank-31.png";
        case 32:
            return "/public/images/rank/rank-32.png";
        case 33:
            return "/public/images/rank/rank-33.png";
        case 34:
            return "/public/images/rank/rank-34.png";
        case 35:
            return "/public/images/rank/rank-35.png";
        case 36:
            return "/public/images/rank/rank-36.png";
        case 37:
            return "/public/images/rank/rank-37.png";
        case 38:
            return "/public/images/rank/rank-38.png";
        case 39:
            return "/public/images/rank/rank-39.png";
        case 40:
            return "/public/images/rank/rank-40.png";
        case 41:
            return "/public/images/rank/rank-41.png";
        case 42:
            return "/public/images/rank/rank-42.png";
        case 43:
            return "/public/images/rank/rank-43.png";
        case 44:
            return "/public/images/rank/rank-44.png";
        case 45:
            return "/public/images/rank/rank-45.png";
        case 46:
            return "/public/images/rank/rank-46.png";
        case 47:
            return "/public/images/rank/rank-47.png";
        case 48:
            return "/public/images/rank/rank-48.png";
        case 49:
            return "/public/images/rank/rank-49.png";
        case 50:
            return "/public/images/rank/rank-50.png";
        case 51:
            return "/public/images/rank/rank-51.png";
        case 52:
            return "/public/images/rank/rank-52.png";
        case 53:
            return "/public/images/rank/rank-53.png";
        case 54:
            return "/public/images/rank/rank-54.png";
        case 55:
            return "/public/images/rank/rank-55.png";
        case 56:
            return "/public/images/rank/rank-56.png";
        case 57:
            return "/public/images/rank/rank-57.png";
        case 58:
            return "/public/images/rank/rank-58.png";
        case 59:
            return "/public/images/rank/rank-59.png";
        case 60:
            return "/public/images/rank/rank-60.png";
        case 61:
            return "/public/images/rank/rank-61.png";
        case 62:
            return "/public/images/rank/rank-62.png";
        case 63:
            return "/public/images/rank/rank-63.png";
        case 64:
            return "/public/images/rank/rank-64.png";
        case 65:
            return "/public/images/rank/rank-65.png";
        case 66:
            return "/public/images/rank/rank-66.png";
        case 67:
            return "/public/images/rank/rank-67.png";
        case 68:
            return "/public/images/rank/rank-68.png";
        case 69:
            return "/public/images/rank/rank-69.png";
        case 70:
            return "/public/images/rank/rank-70.png";
        case 71:
            return "/public/images/rank/rank-71.png";
        case 72:
            return "/public/images/rank/rank-72.png";
        case 73:
            return "/public/images/rank/rank-73.png";
        case 74:
            return "/public/images/rank/rank-74.png";
        case 75:
            return "/public/images/rank/rank-75.png";
        case 76:
            return "/public/images/rank/rank-76.png";
        case 77:
            return "/public/images/rank/rank-77.png";
        case 78:
            return "/public/images/rank/rank-78.png";
        case 79:
            return "/public/images/rank/rank-79.png";
        case 80:
            return "/public/images/rank/rank-80.png";
        case 81:
            return "/public/images/rank/rank-81.png";
        case 82:
            return "/public/images/rank/rank-82.png";
        case 83:
            return "/public/images/rank/rank-83.png";
        case 84:
            return "/public/images/rank/rank-84.png";
        case 85:
            return "/public/images/rank/rank-85.png";
        case 86:
            return "/public/images/rank/rank-86.png";
        case 87:
            return "/public/images/rank/rank-87.png";
        case 88:
            return "/public/images/rank/rank-88.png";
        case 89:
            return "/public/images/rank/rank-89.png";
        case 90:
            return "/public/images/rank/rank-90.png";
        case 91:
            return "/public/images/rank/rank-91.png";
        case 92:
            return "/public/images/rank/rank-92.png";
        case 93:
            return "/public/images/rank/rank-93.png";
        case 94:
            return "/public/images/rank/rank-94.png";
        case 95:
            return "/public/images/rank/rank-95.png";
        case 96:
            return "/public/images/rank/rank-96.png";
        case 97:
            return "/public/images/rank/rank-97.png";
        case 98:
            return "/public/images/rank/rank-98.png";
        case 99:
            return "/public/images/rank/rank-99.png";
        case 100:
            return "/public/images/rank/rank-100.png";
        case 101:
            return "/public/images/rank/rank-101.png";
        case 102:
            return "/public/images/rank/rank-102.png";
        case 103:
            return "/public/images/rank/rank-103.png";
        case 104:
            return "/public/images/rank/rank-104.png";
        case 105:
            return "/public/images/rank/rank-105.png";
        case 106:
            return "/public/images/rank/rank-106.png";
        case 107:
            return "/public/images/rank/rank-107.png";
        case 108:
            return "/public/images/rank/rank-108.png";
        case 109:
            return "/public/images/rank/rank-109.png";
        case 110:
            return "/public/images/rank/rank-110.png";
        case 111:
            return "/public/images/rank/rank-111.png";
        case 112:
            return "/public/images/rank/rank-112.png";
        case 113:
            return "/public/images/rank/rank-113.png";
        case 114:
            return "/public/images/rank/rank-114.png";
        case 115:
            return "/public/images/rank/rank-115.png";
        case 116:
            return "/public/images/rank/rank-116.png";
        case 117:
            return "/public/images/rank/rank-117.png";
        case 118:
            return "/public/images/rank/rank-118.png";
        case 119:
            return "/public/images/rank/rank-119.png";
        case 120:
            return "/public/images/rank/rank-120.png";
        case 121:
            return "/public/images/rank/rank-121.png";
        case 122:
            return "/public/images/rank/rank-122.png";
        case 123:
            return "/public/images/rank/rank-123.png";
        case 124:
            return "/public/images/rank/rank-124.png";
        case 125:
            return "/public/images/rank/rank-125.png";
        case 126:
            return "/public/images/rank/rank-126.png";
        case 127:
            return "/public/images/rank/rank-127.png";
        case 128:
            return "/public/images/rank/rank-128.png";
        case 129:
            return "/public/images/rank/rank-129.png";
        case 130:
            return "/public/images/rank/rank-130.png";
        case 131:
            return "/public/images/rank/rank-131.png";
        case 132:
            return "/public/images/rank/rank-132.png";
        case 133:
            return "/public/images/rank/rank-133.png";
        case 134:
            return "/public/images/rank/rank-134.png";
        case 135:
            return "/public/images/rank/rank-135.png";
        case 136:
            return "/public/images/rank/rank-136.png";
        case 137:
            return "/public/images/rank/rank-137.png";
        case 138:
            return "/public/images/rank/rank-138.png";
        case 139:
            return "/public/images/rank/rank-139.png";
        case 140:
            return "/public/images/rank/rank-140.png";
        case 141:
            return "/public/images/rank/rank-141.png";
        case 142:
            return "/public/images/rank/rank-142.png";
        case 143:
            return "/public/images/rank/rank-143.png";
        case 144:
            return "/public/images/rank/rank-144.png";
        case 145:
            return "/public/images/rank/rank-145.png";
        case 146:
            return "/public/images/rank/rank-146.png";
        case 147:
            return "/public/images/rank/rank-147.png";
        case 148:
            return "/public/images/rank/rank-148.png";
        case 149:
            return "/public/images/rank/rank-149.png";
        case 150:
            return "/public/images/rank/rank-150.png";
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