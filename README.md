# GeoDCAT-AP

This is the issue tracker for the maintenance of [GeoDCAT-AP](https://joinup.ec.europa.eu/solution/geodcat-application-profile-data-portals-europe).

GeoDCAT-AP is an extension of [DCAT-AP](https://joinup.ec.europa.eu/solution/dcat-application-profile-data-portals-europe) for describing geospatial datasets, dataset series, and services. It provides an RDF syntax binding for the union of metadata elements defined in the core profile of [ISO 19115:2003](https://www.iso.org/standard/26020.html) and those defined in the framework of the [EU INSPIRE Directive](https://inspire.ec.europa.eu/). Its basic use case is to make spatial datasets, data series, and services searchable on general data portals, thereby making geospatial information better searchable across borders and sectors.

GeoDCAT-AP is a joint initiative of the [European Commission's Joint Research Centre (JRC)](https://ec.europa.eu/jrc/), the [Publications Office of the European Union (PO)](https://publications.europa.eu/), the [EU ISA Programme](https://ec.europa.eu/isa2/) and [DG CONNECT](https://ec.europa.eu/info/departments/communications-networks-content-and-technology). More than 52 people from 12 EU Member States contributed to the specification in the Working Group or during the public review period.

The current version of GeoDCAT-AP (v1.0.1) can be downloaded from:

[https://joinup.ec.europa.eu/release/geodcat-ap/101](https://joinup.ec.europa.eu/release/geodcat-ap/101)

Any problems encountered, or suggestions for new functionalities can be submitted as [issues on the GeoDCAT-AP repository on GitHub](https://github.com/SEMICeu/GeoDCAT-AP/issues). 

*The GeoDCAT-AP specification does not replace the [INSPIRE Metadata Regulation](http://eur-lex.europa.eu/eli/reg/com/2008/1205) nor the [INSPIRE Metadata technical guidelines based on ISO 19115 and ISO 19119](https://inspire.ec.europa.eu/id/document/tg/metadata-iso19139). Its purpose is give owners of geospatial metadata the possibility to achieve more by providing an additional RDF syntax binding.*

## Structure of the repository

- [Releases](./releases/): GeoDCAT-AP releases (1.0, etc.); each release might have different distributions.
- [Working Drafts](./drafts/): Working drafts including revisions to the latest GeoDCAT-AP release.

## Implementations

- [GeoDCAT-AP XSLT & API](https://github.com/SEMICeu/iso-19139-to-dcat-ap): Reference XSLT-based implementation and API
- [EPSG to RDF XSLT](https://github.com/SEMICeu/epsg-to-rdf): Proof of concept for the RDF representation of the [OGC EPSG register of coordinate reference systems](http://www.opengis.net/def/crs/EPSG/0/), extending the RDF mappings for reference systems defined in GeoDCAT-AP.

Additional GeoDCAT-AP implementations are documented in the [dedicated page on Joinup](https://joinup.ec.europa.eu/document/geodcat-ap-implementations).

## Licence

GeoDCAT-AP releases and working drafts are distributed under the [ISA Open Metadata Licence v1.1](https://joinup.ec.europa.eu/licence/isa-open-metadata-licence-v11).

