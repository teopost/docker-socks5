-e 

function FindProxyForURL(url, host) {
        var useGateway=false;
	host = host.toLowerCase();

	if (dnsDomainIs(host, "fake-domain-head") || 
-e shExpMatch(host, "srvweb01".toLowerCase() ) ||
-e shExpMatch(host, "srvportalidc02.amadori.local".toLowerCase() ) ||
-e shExpMatch(host, "srvportalidc02".toLowerCase() ) ||
-e shExpMatch(host, "srvdb2idc".toLowerCase() ) ||
-e shExpMatch(host, "srvportal01".toLowerCase() ) ||
-e shExpMatch(host, "srvportaltest01.amadori.local".toLowerCase() ) ||
-e shExpMatch(host, "srvportaltest01".toLowerCase() ) ||
-e shExpMatch(host, "portalweb01.amadori.local".toLowerCase() ) ||
-e shExpMatch(host, "portalweb01".toLowerCase() ) ||
-e shExpMatch(host, "digitalpeopoll.amadori.it".toLowerCase() ) ||
-e shExpMatch(host, "m.amadori.it".toLowerCase() ) ||
-e shExpMatch(host, "srvwas01".toLowerCase() ) ||
-e shExpMatch(host, "localhost.localdomain".toLowerCase() ) ||
-e shExpMatch(host, "srvdomapp01".toLowerCase() ) ||
-e shExpMatch(host, "srvdb2.callegaris.local".toLowerCase() ) ||
-e shExpMatch(host, "openldap-test.calligaris.local".toLowerCase() ) ||
-e shExpMatch(host, "dmgr.calligaris.local".toLowerCase() ) ||
-e shExpMatch(host, "portal01.calligaris.local".toLowerCase() ) ||
-e shExpMatch(host, "portal02.calligaris.local".toLowerCase() ) ||
-e shExpMatch(host, "srvportal.calligaris.local".toLowerCase() ) ||
-e shExpMatch(host, "srvftp01.dimo.net".toLowerCase() ) ||
-e shExpMatch(host, "jenkins.dimo.net".toLowerCase() ) ||
-e shExpMatch(host, "srvutils.dimo.gcp".toLowerCase() ) ||
-e shExpMatch(host, "jenkins.dimo.gcp".toLowerCase() ) ||
-e shExpMatch(host, "srvdmgr.elesasl.local".toLowerCase() ) ||
-e shExpMatch(host, "srvihs.elesasl.local".toLowerCase() ) ||
-e shExpMatch(host, "srvtst.elesasl.local".toLowerCase() ) ||
-e shExpMatch(host, "srvwcs.elesasl.local".toLowerCase() ) ||
-e shExpMatch(host, "srvwcs2.elesasl.local".toLowerCase() ) ||
-e shExpMatch(host, "srvstg.elesasl.local".toLowerCase() ) ||
-e shExpMatch(host, "www.elesa-ganter.com".toLowerCase() ) ||
-e shExpMatch(host, "srvtst.elesaganter.local".toLowerCase() ) ||
-e shExpMatch(host, "wcsstg.elesaganter.local".toLowerCase() ) ||
-e shExpMatch(host, "srvstg.elesaganter.local".toLowerCase() ) ||
-e shExpMatch(host, "srvwcs.elesaganter.local".toLowerCase() ) ||
-e shExpMatch(host, "srvwcs2.elesaganter.local".toLowerCase() ) ||
-e shExpMatch(host, "dmgr.elesaganter.local".toLowerCase() ) ||
-e shExpMatch(host, "jenkins-eye.luxottica.local".toLowerCase() ) ||
-e shExpMatch(host, "jenkins-eye".toLowerCase() ) ||
-e shExpMatch(host, "jenkins-doc.luxottica.local".toLowerCase() ) ||
-e shExpMatch(host, "jenkins-doc".toLowerCase() ) ||
-e shExpMatch(host, "ci.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "ax156sfi.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "ecsiptools01.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "ax158sfi.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "wasectstint01.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "ax152sfi.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "ax152sfi".toLowerCase() ) ||
-e shExpMatch(host, "ectools01.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "ax153sfi.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "ax153sfi".toLowerCase() ) ||
-e shExpMatch(host, "ectools02.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "webecprd03".toLowerCase() ) ||
-e shExpMatch(host, "webecprd03.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "webecprd01.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "ectools01.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "webecprd04".toLowerCase() ) ||
-e shExpMatch(host, "webecprd04.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "webecprd02.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "wasecprd02.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "ax194sfi.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "ax195sfi.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "webec01prd.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "webecqty01.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "webecqty01".toLowerCase() ) ||
-e shExpMatch(host, "webecsit01.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "webecsit01".toLowerCase() ) ||
-e shExpMatch(host, "ax160sfi".toLowerCase() ) ||
-e shExpMatch(host, "ax160sfi.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "ax162sfi".toLowerCase() ) ||
-e shExpMatch(host, "ax162sfi.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "wasecqty01.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "dbectstint01.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "dbectstint01.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "frg-lnx-cm-10-sky".toLowerCase() ) ||
-e shExpMatch(host, "frg-lnx-cm-10-sky.tecla.local".toLowerCase() ) ||
-e shExpMatch(host, "overview.frg-lnx-cm-10-sky.tecla.local".toLowerCase() ) ||
-e shExpMatch(host, "preview.frg-lnx-cm-10-sky.tecla.local".toLowerCase() ) ||
-e shExpMatch(host, "helios.frg-lnx-cm-10-sky.tecla.local".toLowerCase() ) ||
-e shExpMatch(host, "overview.cm10.sit2.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "corporate.frg-lnx-cm-10-sky.local".toLowerCase() ) ||
-e shExpMatch(host, "studio.frg-lnx-cm-10-sky.tecla.local".toLowerCase() ) ||
-e shExpMatch(host, "shop-helios.frg-lnx-cm-10-sky.tecla.local".toLowerCase() ) ||
-e shExpMatch(host, "sitemanager.frg-lnx-cm-10-sky.tecla.local".toLowerCase() ) ||
-e shExpMatch(host, "shop-preview-production-helios.frg-lnx-cm-10-sky.tecla.local".toLowerCase() ) ||
-e shExpMatch(host, "shop-preview-helios.frg-lnx-cm-10-sky.tecla.local".toLowerCase() ) ||
-e shExpMatch(host, "cm10.sit2.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "shop-ibm.frg-lnx-cm-10-sky.tecla.local".toLowerCase() ) ||
-e shExpMatch(host, "preview.cm10.sit3.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "preview.cm10.sit.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "lnx255sfi.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "overview.cm10.sit.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "studio.cm10.sit.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "cm10.sit.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "lnx255sfi".toLowerCase() ) ||
-e shExpMatch(host, "helios.cm10.sit.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "lnx255sfi".toLowerCase() ) ||
-e shExpMatch(host, "cm10.qty.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "lnx255aqty".toLowerCase() ) ||
-e shExpMatch(host, "cm10.qty.mgm.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "preview.cm10.qty.mgm.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "overview.cm10.qty.mgm.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "studio.cm10.qty.mgm.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "helios.cm10.qty.del.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "lnx256aqty.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "lnx256aqty".toLowerCase() ) ||
-e shExpMatch(host, "sit2.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "preview.cm10.sit2.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "sit3.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "skytap.ferragamo.com".toLowerCase() ) ||
-e shExpMatch(host, "sit4.eu.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "overview.cm10.prd.mgm.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "studio.cm10.prd.mgm.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "preview.cm10.prd.mgm.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "cm10.prd.mgm.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "lnx255apri".toLowerCase() ) ||
-e shExpMatch(host, "helios.cm10.prd.del1.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "overview.cm10.prd.del1.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "cm10.prd.del1.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "lnx256apri".toLowerCase() ) ||
-e shExpMatch(host, "overview.cm10.prd.del2.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "cm10.prd.del2.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "lnx256asec".toLowerCase() ) ||
-e shExpMatch(host, "helios.cm10.prd.del2.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "preview-helios.skytap.stage.cms".toLowerCase() ) ||
-e shExpMatch(host, "preview.cm10.sit4.ferragamo.local".toLowerCase() ) ||
-e shExpMatch(host, "cmc.irritecqaauthirritec.it".toLowerCase() ) ||
-e shExpMatch(host, "accelerator.irritecqaauthirritec.it".toLowerCase() ) ||
-e shExpMatch(host, "admin.irritecqaauthirritec.it".toLowerCase() ) ||
-e shExpMatch(host, "org.irritecqaauthirritec.it".toLowerCase() ) ||
-e shExpMatch(host, "store.irritecqaauthirritec.it".toLowerCase() ) ||
-e shExpMatch(host, "search.irritecqaauthirritec.it".toLowerCase() ) ||
-e shExpMatch(host, "tsapp.irritecqaauthirritec.it".toLowerCase() ) ||
-e shExpMatch(host, "cmc.irritecqaliveirritec.it".toLowerCase() ) ||
-e shExpMatch(host, "accelerator.irritecqaliveirritec.it".toLowerCase() ) ||
-e shExpMatch(host, "admin.irritecqaliveirritec.it".toLowerCase() ) ||
-e shExpMatch(host, "org.irritecqaliveirritec.it".toLowerCase() ) ||
-e shExpMatch(host, "store.irritecqaliveirritec.it".toLowerCase() ) ||
-e shExpMatch(host, "search.irritecqaliveirritec.it".toLowerCase() ) ||
-e shExpMatch(host, "searchrepeater.irritecqaliveirritec.it".toLowerCase() ) ||
-e shExpMatch(host, "tsapp.irritecqaliveirritec.it".toLowerCase() ) ||
-e shExpMatch(host, "cmc.irritecprodauth.irritec.it".toLowerCase() ) ||
-e shExpMatch(host, "accelerator.irritecprodauth.irritec.it".toLowerCase() ) ||
-e shExpMatch(host, "admin.irritecprodauth.irritec.it".toLowerCase() ) ||
-e shExpMatch(host, "org.irritecprodauth.irritec.it".toLowerCase() ) ||
-e shExpMatch(host, "store.irritecprodauth.irritec.it".toLowerCase() ) ||
-e shExpMatch(host, "search.irritecprodauth.irritec.it".toLowerCase() ) ||
-e shExpMatch(host, "tsapp.irritecprodauth.irritec.it".toLowerCase() ) ||
-e shExpMatch(host, "cmc.irritecprodlive.irritec.it".toLowerCase() ) ||
-e shExpMatch(host, "accelerator.irritecprodlive.irritec.it".toLowerCase() ) ||
-e shExpMatch(host, "admin.irritecprodlive.irritec.it".toLowerCase() ) ||
-e shExpMatch(host, "org.irritecprodlive.irritec.it".toLowerCase() ) ||
-e shExpMatch(host, "store.irritecprodlive.irritec.it".toLowerCase() ) ||
-e shExpMatch(host, "search.irritecprodlive.irritec.it".toLowerCase() ) ||
-e shExpMatch(host, "searchrepeater.irritecprodlive.irritec.it".toLowerCase() ) ||
-e shExpMatch(host, "tsapp.irritecprodlive.irritec.it".toLowerCase() ) ||
-e shExpMatch(host, "jumpbox-hcl.westeurope.cloudapp.azure.com".toLowerCase() ) ||
-e shExpMatch(host, "Jumpbox-hcl-prd.westeurope.cloudapp.azure.com".toLowerCase() ) ||
-e shExpMatch(host, "gitlab.lutech.it".toLowerCase() ) ||
-e shExpMatch(host, "studio-dev.lutech.group".toLowerCase() ) ||
-e shExpMatch(host, "dev.lutech.group".toLowerCase() ) ||
-e shExpMatch(host, "dev-allinone".toLowerCase() ) ||
-e shExpMatch(host, "dev-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "overview.dev-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "preview-dev.lutech.group".toLowerCase() ) ||
-e shExpMatch(host, "preview.dev-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "helios.dev-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "corporate.dev-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "studio.dev-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "shop-helios.dev-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "sitemanager.dev-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "shop-preview-production-helios.dev-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "shop-preview-helios.dev-cm-aio.lutech.loal".toLowerCase() ) ||
-e shExpMatch(host, "preview.dev-cm-aio.tenenigen.local".toLowerCase() ) ||
-e shExpMatch(host, "corporate.dev-cm-aio.tenenigen.local".toLowerCase() ) ||
-e shExpMatch(host, "previewdev.tenenigen.com".toLowerCase() ) ||
-e shExpMatch(host, "dev.tenenigen.com".toLowerCase() ) ||
-e shExpMatch(host, "uat-allinone".toLowerCase() ) ||
-e shExpMatch(host, "uat-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "overview.uat-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "preview.uat-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "helios.uat-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "corporate.uat-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "studio.uat-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "shop-helios.uat-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "sitemanager.uat-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "shop-preview-production-helios.uat-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "shop-preview-helios.uat-cm-aio.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "studio.uat-cm-aio.tenenigen.local".toLowerCase() ) ||
-e shExpMatch(host, "uat.tenenigen.com".toLowerCase() ) ||
-e shExpMatch(host, "prd-cms-deliv-1".toLowerCase() ) ||
-e shExpMatch(host, "prd-cm-dv1.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "overview.prd-cm-dv1.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "preview.prd-cm-dv1.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "helios.prd-cm-dv1.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "corporate.prd-cm-dv1.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "studio.prd-cm-dv1.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "shop-helios.prd-cm-dv1.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "sitemanager.prd-cm-dv1.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "shop-preview-production-helios.prd-cm-dv1.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "shop-preview-helios.prd-cm-dv1.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "prd-deliv-2".toLowerCase() ) ||
-e shExpMatch(host, "prd-cm-dv2.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "overview.prd-cm-dv2.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "preview.prd-cm-dv2.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "helios.prd-cm-dv2.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "corporate.prd-cm-dv2.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "studio.prd-cm-dv2.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "shop-helios.prd-cm-dv2.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "sitemanager.prd-cm-dv2.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "shop-preview-production-helios.prd-cm-dv2.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "shop-preview-helios.prd-cm-dv2.lutech.local".toLowerCase() ) ||
-e shExpMatch(host, "studio-uat.lutech.group".toLowerCase() ) ||
-e shExpMatch(host, "preview-uat.lutech.group".toLowerCase() ) ||
-e shExpMatch(host, "uat.lutech.group".toLowerCase() ) ||
-e shExpMatch(host, "preview-uat.tenenigen.it".toLowerCase() ) ||
-e shExpMatch(host, "uat.tenenigen.it".toLowerCase() ) ||
-e shExpMatch(host, "new.lutech.group".toLowerCase() ) ||
-e shExpMatch(host, "preview.lutech.group".toLowerCase() ) ||
-e shExpMatch(host, "view-localhost".toLowerCase() ) ||
-e shExpMatch(host, "tenenigen.com".toLowerCase() ) ||
-e shExpMatch(host, "www.tenenigen.com".toLowerCase() ) ||
-e shExpMatch(host, "ec2-52-31-79-4.eu-west-1.compute.amazonaws.com".toLowerCase() ) ||
-e shExpMatch(host, "eshop-staging.qubicaamf.com".toLowerCase() ) ||
-e shExpMatch(host, "qamf-ec-staging01".toLowerCase() ) ||
-e shExpMatch(host, "qamf-ec-test".toLowerCase() ) ||
-e shExpMatch(host, "qamf-ec-test.qamf.net".toLowerCase() ) ||
-e shExpMatch(host, "qamf-ec-proxy01".toLowerCase() ) ||
-e shExpMatch(host, "qamf-ec-proxy01.qamf.net".toLowerCase() ) ||
-e shExpMatch(host, "qamf-ec-was01".toLowerCase() ) ||
-e shExpMatch(host, "qamf-ec-was02".toLowerCase() ) ||
-e shExpMatch(host, "qamf-ec-web01".toLowerCase() ) ||
-e shExpMatch(host, "eshop.qubicaamf.com".toLowerCase() ) ||
-e shExpMatch(host, "rancher.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "uatstage.sacchi.it".toLowerCase() ) ||
-e shExpMatch(host, "uatlive.sacchi.it".toLowerCase() ) ||
-e shExpMatch(host, "portal.sacchiqa.local".toLowerCase() ) ||
-e shExpMatch(host, "store.sacchiQAauth.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "cmc.sacchiQAauth.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "wasadmin.sacchiQAauth.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "search.sacchiQAauth.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "tsapp.sacchiQAauth.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "store.sacchiQAlive.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "cmc.sacchiQAlive.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "wasadmin.sacchiQAlive.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "search.sacchiQAlive.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "tsapp.sacchiQAlive.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "prodstage.sacchi.it".toLowerCase() ) ||
-e shExpMatch(host, "www.sacchi.it".toLowerCase() ) ||
-e shExpMatch(host, "WEB7HTTP1.sacchi.it".toLowerCase() ) ||
-e shExpMatch(host, "web7ortal1.sacchi.it".toLowerCase() ) ||
-e shExpMatch(host, "web7ortal2.sacchi.it".toLowerCase() ) ||
-e shExpMatch(host, "web7sds.sacchi.it".toLowerCase() ) ||
-e shExpMatch(host, "web7dmgr.sacchi.it".toLowerCase() ) ||
-e shExpMatch(host, "store.sacchiPRODauth.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "cmc.sacchiPRODauth.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "wasadmin.sacchiPRODauth.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "search.sacchiPRODauth.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "tsapp.sacchiPRODauth.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "store.sacchiPRODlivelive.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "cmc.sacchiPRODlive.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "wasadmin.sacchiPRODlive.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "search.sacchiPRODlive.sacchi.local".toLowerCase() ) ||
-e shExpMatch(host, "tsapp.sacchiPRODlive.sacchi.local".toLowerCase() ) ||
-e dnsDomainIs(host, "fake-domain-tail") )
        {
                useGateway=true;
        }

        if (useGateway)
	   return "SOCKS5 proxy-gateway.tecla.it:60000";
}
