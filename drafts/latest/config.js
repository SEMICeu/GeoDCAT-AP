var respecConfig = {
// ISA specific
    version: "1.0.1.*",
    versionURL: "https://semiceu.github.io/GeoDCAT-AP/drafts/latest/",
    latestVersionURL: "https://semiceu.github.io/GeoDCAT-AP/drafts/latest/",

//	preProcess: [dfn_index],
    logos: [{
//      src: './images/eu-isa-programme.png',
      src: "./images/eu-isa2-programme.jpg",
//      url: 'https://ec.europa.eu/isa',
      url: "https://ec.europa.eu/isa2",
//      alt: "EU ISA Programme",
//      title: "EU ISA Programme",
      alt: "EU ISA² Programme",
      title: "EU ISA² Programme",
      width: 150,
//      height: 42,
      id: 'logo-eu-isa-programme',
    }],
    noRecTrack: true,    
    subtitle: "A geospatial extension for the DCAT application profile for data portals in Europe",
    copyrightHolder: "European Union",
    copyrightURL: "https://europa.eu/",
    copyrightStart: 2015,
//    publishDate: "2016-08-02",
/*
    alternateFormats: [{
      label: "PDF",
      uri: "http://data.europa.eu/w21/483d8c3f-b577-4fbb-ac05-fc55cdf44421",
    }, {
      label: "DOCX",
      uri: "http://data.europa.eu/w21/f106d0e0-4777-4ae2-bfc7-54c4f1d72b79",
    }],    
*/
    implementationReportURI:"https://joinup.ec.europa.eu/node/144843",
    license: "isa-open-metadata",
    specStatus: "unofficial",
    shortName: "geodcat-ap",
    canonicalURI: "https://semiceu.github.io/GeoDCAT-AP/drafts/latest/",
//    prevRecURI:           "https://joinup.ec.europa.eu/release/geodcat-ap/v101",
    previousPublishDate:  "2016-08-02",
    previousMaturity:     "final",
    previousURI:          "http://data.europa.eu/w21/81fd7288-6929-4b42-8707-2da604490d30",
    edDraftURI:           "https://semiceu.github.io/GeoDCAT-AP/drafts/latest/",
    issueBase:            "https://github.com/semiceu/geodcat-ap/issues/",
    github:               "https://github.com/semiceu/geodcat-ap/",
    formerEditors: [{
      name:       "Andrea Perego",
      company:    "European Commission, Joint Research Centre",
      url: "",
      companyURL: "https://ec.europa.eu/jrc/"
    },{
      name: "Stijn Goedertier",
      company: "PwC EU Services",
      companyURL: "https://www.pwc.com/gx/en/services/european-union.html"
    },{
      name: "Antonio Rotundo",
      company: "Agenzia per l'Italia Digitale",
      url: "",
      companyURL: "http://www.agid.gov.it/"
    }],
    editors: [{
      name:       "Andrea Perego",
      company:    "European Commission, Joint Research Centre",
      url: "",
      companyURL: "https://ec.europa.eu/jrc/"
    },
/*    
    {
      name: "Stijn Goedertier",
      company: "PwC EU Services",
      companyURL: "https://www.pwc.com/gx/en/services/european-union.html"
    },
    {
      name: "Antonio Rotundo",
      company: "Agenzia per l'Italia Digitale",
      url: "",
      companyURL: "http://www.agid.gov.it/"
    }
*/    
    ],
    authors: [{
      name: "GeoDCAT-AP Working Group",
      company: "EU ISA Programme",
      companyURL: "https://ec.europa.eu/isa/",
    }],    
//    otherLinks: [
//      {
//        key: "Contributors",
//        data: [{
//            value: "Andrea Perego",
//            href: "xx"
//        },{
//            value: "Stijn Goedertier",
//            href: "xx"
//        },{
//            value: "Antonio Rotundo",
//            href: "xx"
//        }]
//      },
//        {
//        key: "Editors of previous version",
//        data: [{
//            value: "Fadi Maali, DERI",
//            href: "http://www.deri.ie/"
//        },{
//            value: "John Erickson, Tetherless World Constellation (RPI)",
//            href: "http://tw.rpi.edu/"
//        }]
//      }
//    ],
    wg: "GeoDCAT-AP Working Group",
    wgURI: "https://joinup.ec.europa.eu/release/geodcat-ap-working-drafts",
//    wgPublicList: "public-dxwg-comments",
//    wgPatentURI: "https://www.w3.org/2004/01/pp-impl/99375/status",
    inlineCSS: "true",
	  lint: "false",
    localBiblio: {
      "DCWIKI": {
        "href":"http://wiki.dublincore.org/index.php/User_Guide/Publishing_Metadata",
        "title":"User Guide / Publishing Metadata",
//        "authors":["Dublin Core Metadata Initiative"],
        "publisher":"Dublin Core Metadata Initiative",
        "date":"9 March 2007"
      },
      "CLD-FREQ": {
        "href":"http://dublincore.org/groups/collections/frequency/",
        "title":"Dublin Core Collection Description Frequency Vocabulary",
        "authors":["Dublin Core Collection Description Task Group"],
        "publisher":"Dublin Core Metadata Initiative",
        "date":"9 March 2007"
      },
      "GEOHASH":{
        "href":"http://en.wikipedia.org/wiki/Geohash",
        "title":"Geohash",
        "publisher":"Wikipedia"
       },
      "GEODCAT-XSLT":{
        "href":"https://github.com/SEMICeu/iso-19139-to-dcat-ap",
        "title":"XSLT for converting ISO 19139 metadata into DCAT-AP",
        "authors":["Andrea Perego"],
//        "publisher":"",
        "date":"2015"
       },
      "GEOHASH-36":{
        "href":"http://en.wikipedia.org/wiki/Geohash-36",
        "title":"Geohash-36",
        "publisher":"Wikipedia"
       },
      "GEONAMES":{
        "href":"http://geonames.org/",
        "title":"Geonames"
       },
      "GEOJSON":{
        "href":"http://geojson.org/geojson-spec.html",
        "title":"The GeoJSON Format Specification",
        "authors":["Howard Butler","Martin Daly","Allan Doyle","Sean Gillies","Tim Schaub","Christopher Schmidt"],
        "date":"16 June 2008"
      },
      "INSPIRE-DC": {
        "href":"http://inspire.ec.europa.eu/reports/ImplementingRules/metadata/MD_IR_and_DC_state%20of%20progress.pdf",
        "title":"State of progress in the development of guidelines to express elements of the INSPIRE metadata implementing rules using ISO 15836 (Dublin core)",
//        "authors":["European Commission"],
        "publisher":"European Commission",
        "date":"6 May 2008"
      },
      "INSPIRE-DCAT": {
        "href":"https://ies-svn.jrc.ec.europa.eu/projects/metadata/wiki/Alignment_of_INSPIRE_metadata_with_DCAT-AP",
        "title":"Alignment of INSPIRE metadata with DCAT-AP",
//        "authors":["European Commission"],
        "publisher":"European Commission",
        "date":"2014"
      },
      "INSPIRE-DIR": {
        "href":"http://data.europa.eu/eli/dir/2007/2/oj",
        "title":"DIRECTIVE 2007/2/EC OF THE EUROPEAN PARLIAMENT AND OF THE COUNCIL of 14 March 2007 establishing an Infrastructure for Spatial Information in the European Community (INSPIRE)",
        "publisher":"OJ L 108",
        "date":"25 April 2007"
      },
      "INSPIRE-SDSS-REG": {
        "href":"http://data.europa.eu/eli/reg/2010/1089",
        "title":"Commission Regulation (EU) No 1089/2010 of 23 November 2010 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards interoperability of spatial data sets and services",
        "publisher":"OJ L 323",
        "date":"8 December 2010"
      },
      "INSPIRE-MD-REG": {
        "href":"http://data.europa.eu/eli/reg/2008/1205",
        "title":"Commission Regulation (EC) No 1205/2008 of 3 December 2008 implementing Directive 2007/2/EC of the European Parliament and of the Council as regards metadata",
        "publisher":"OJ L 326",
        "date":"4 December 2008"
      },
      "INSPIRE-MT": {
        "href":"http://inspire.ec.europa.eu/media-types/",
        "title":"INSPIRE Media Type Register",
//        "authors":["European Commission"],
        "publisher":"European Commission",
        "date":"7 November 2011"
      },
      "INSPIRE-DS": {
        "href":"http://inspire.jrc.ec.europa.eu/documents/Network_Services/TechnicalGuidance_DiscoveryServices_v3.1.pdf",
        "title":"Technical Guidance for the implementation of INSPIRE Discovery Services. Version 3.1",
//        "authors":["European Commission"],
        "publisher":"European Commission",
        "date":"7 November 2011"
      },
      "KML": {
        "href": "http://www.opengeospatial.org/standards/kml",
        "title": "OGC KML 2.3",
        "authors": ["David Burggraf"],
        "publisher":"OGC",
//        "status":"OGC® Implementation Standard",
        "date": "4 August 2015"
      },
      "MDR-CONT":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/continent",
        "title":"Named Authority List: Continents",
        "publisher":"Publications Office of the European Union"
       },
      "MDR-COUNTRIES":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/country",
        "title":"Named Authority List: Countries",
        "publisher":"Publications Office of the European Union"
       },
      "MDR-EUROVOC":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/th-dataset/-/resource/dataset/eurovoc",
        "title":"EuroVoc",
        "publisher":"Publications Office of the European Union"
       },
      "MDR-FREQ":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/frequency",
        "title":"Named Authority List: Frequencies",
        "publisher":"Publications Office of the European Union"
       },
      "MDR-FT":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/file-type",
        "title":"Named Authority List: File types",
        "publisher":"Publications Office of the European Union"
       },
      "MDR-LANG":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/language",
        "title":"Named Authority List: Languages",
        "publisher":"Publications Office of the European Union"
       },
      "MDR-PLACES":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/place",
        "title":"Named Authority List: Places",
        "publisher":"Publications Office of the European Union"
       },
      "MDR-THEMES":{
        "href":"https://publications.europa.eu/en/web/eu-vocabularies/at-dataset/-/resource/dataset/data-theme",
        "title":"Named Authority List: Data Themes",
        "publisher":"Publications Office of the European Union"
       },
      "NEOGEO": {
        "href": "http://geovocab.org/doc/neogeo/",
        "title": "NeoGeo Vocabulary Specification - Madrid Edition",
        "authors": ["Juan Martín Salas","Andreas Harth"],
        "publisher":"GeoVocab.org",
        "date": "25 February 2012"
      },
      "SCHEMA-ORG":{
        "href":"http://schema.org/",
        "title":"Schema.org"
      },
    }
  };
