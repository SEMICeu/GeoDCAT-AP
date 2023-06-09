![SEMIC Core Vocabulary](/semic-icon-small.png)
# GeoDCAT-AP

This is the issue tracker for the maintenance of [GeoDCAT-AP](https://joinup.ec.europa.eu/solution/geodcat-application-profile-data-portals-europe).

GeoDCAT-AP is an extension of [DCAT-AP](https://joinup.ec.europa.eu/solution/dcat-application-profile-data-portals-europe) for describing geospatial datasets, dataset series, and services. It provides an RDF syntax binding for the union of metadata elements defined in the core profile of [ISO 19115:2003](https://www.iso.org/standard/26020.html) and those defined in the framework of the [EU INSPIRE Directive](https://inspire.ec.europa.eu/). Its basic use case is to make spatial datasets, data series, and services searchable on general data portals, thereby making geospatial information better searchable across borders and sectors.

GeoDCAT-AP is a joint initiative of the [European Commission's Joint Research Centre (JRC)](https://ec.europa.eu/jrc/), the [Publications Office of the European Union (PO)](https://publications.europa.eu/), the [EU ISA² Programme](https://ec.europa.eu/isa2/) and [DG CONNECT](https://ec.europa.eu/info/departments/communications-networks-content-and-technology).

The latest version of GeoDCAT-AP (v2.0.0) is available:

[https://semiceu.github.io/GeoDCAT-AP/releases/](https://semiceu.github.io/GeoDCAT-AP/releases/)

Any problems encountered, or suggestions for new functionalities can be submitted as [issues on the GeoDCAT-AP repository on GitHub](https://github.com/SEMICeu/GeoDCAT-AP/issues). A short guideline for submitting issues can be found at [SEMICeu/DCAT-AP/wiki/Submission-guidelines](https://github.com/SEMICeu/DCAT-AP/wiki/Submission-guidelines). 

*The GeoDCAT-AP specification does not replace the [INSPIRE Metadata Regulation](http://data.europa.eu/eli/reg/2008/1205) nor the [INSPIRE Metadata technical guidelines based on ISO 19115 and ISO 19119](https://inspire.ec.europa.eu/id/document/tg/metadata-iso19139). Its purpose is give owners of geospatial metadata the possibility to achieve more by providing an additional RDF syntax binding.*

## Structure of the repository

- [Releases](./releases/): GeoDCAT-AP releases (1.0, etc.); each release might have different distributions.
- [Working Drafts](./drafts/): Working drafts including revisions to the latest GeoDCAT-AP release.

## Implementations

- [GeoDCAT-AP XSLT & API](https://github.com/SEMICeu/iso-19139-to-dcat-ap): Reference XSLT-based implementation and API
- [CSW-4-Web](https://github.com/SEMICeu/csw-4-web): A proof-of-concept API to expose CSW endpoints in a Web-friendly way, making use of an extended and ad hoc version of the GeoDCAT-AP XSLT & API.
- [EPSG to RDF XSLT](https://github.com/SEMICeu/epsg-to-rdf): Proof of concept for the RDF representation of the [OGC EPSG register of coordinate reference systems](http://www.opengis.net/def/crs/EPSG/0/), extending the RDF mappings for reference systems defined in GeoDCAT-AP.

Additional GeoDCAT-AP implementations are documented in the [dedicated page on Joinup](https://joinup.ec.europa.eu/collection/semantic-interoperability-community-semic/solution/geodcat-application-profile-data-portals-europe/document/geodcat-ap-implementations).

## Licence

Copyright © 2023 European Union. All material in this repository is published under the licence CC-BY 4.0, unless explicitly otherwise mentioned. Any problems encountered, or suggestions for new functionalities can be submitted as issues on the GeoDCAT-AP repository on GitHub.

