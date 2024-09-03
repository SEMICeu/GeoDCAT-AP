# **Consolidated Changelog**

This changelog provides an overview of the changes incorporated in GeoDCAT-AP 3.0.0. A complete list of the issues closed with this release is accessible on [GitHub](https://github.com/SEMICeu/GeoDCAT-AP/issues?q=is%3Aissue+is%3Aopen+label%3Arelease%3A3.0.0-jun2024).

# **Editorial changes**

- Introduction: revised the introduction and context to be more up to date.
- Terminology: updated the list of prefixes.
- Formal data model presentation: introduced the notions of Main Entities, Supportive Entities and Datatypes to enhance the readability.
- Controlled Vocabularies: removed the section on licence vocabularies as there is a new section on expressing legal information.
- High-value Datasets: new section to create a reference to the guidelines for High-value Datasets.
- Annex Quick Reference of Classes and Properties: improved the HTML table making it interactive.
- New document for GeoDCAT-AP vocabulary (<https://data.europa.eu/930>).
- Added links to individual re-used classes and properties from DCAT-AP and DCAT for easier navigation through the profile hierarchy.

## **Data model adaptations**

- Issue [82](https://github.com/SEMICeu/GeoDCAT-AP/issues/82): Relaxed the cardinality of Distribution.rights.
- Issue [77](http://77): Introduction geodcat:serviceCategory, geodcat:serviceType, and geodcat:resourceType as subproperties of dct:type.
- Issue [78](https://github.com/SEMICeu/GeoDCAT-AP/issues/78): Introduction of geodcat:topicCategory as subproperty of dct:subject.
- Issue [72](https://github.com/SEMICeu/GeoDCAT-AP/issues/72): The properties from dcat:Dataset were added to dcat:DatasetSeries.
- Issue [99](https://github.com/SEMICeu/GeoDCAT-AP/issues/99): Limit the range of vcard:hasEmail to vcard:Email. Add vcard:Email.
- Issue [88](https://github.com/SEMICeu/GeoDCAT-AP/issues/88) & [103](https://github.com/SEMICeu/GeoDCAT-AP/issues/103): Update usage note of Distribution.characterEncoding and CatalogueRecord.characterEncoding was dropped.
- Issue [105](https://github.com/SEMICeu/GeoDCAT-AP/issues/105): Usage notes are split into definitions and usage notes.
- Issue [104](https://github.com/SEMICeu/GeoDCAT-AP/issues/104): The cardinality on Location.geographicName was relaxed.
- Issue [100](https://github.com/SEMICeu/GeoDCAT-AP/issues/100): Updated cardinality of spatial resolution across Distribution, Data Service, Dataset and Dataset Series to be in line with its meaning in each case.
- Issue [114](https://github.com/SEMICeu/GeoDCAT-AP/issues/114): Introduction of geodcat:serviceProtocol as subproperty of dct:conformsTo on dcat:DataService.

# **Alignment with DCAT-AP 3.0.0**

## **Dataset Series**

Dataset Series are the main change for DCAT-AP 2.1.1 to DCAT-AP 3.0.0.

DCAT-AP 3.0.0 has adopted Dataset Series in a lightweight alignment: namely very few restrictions have been included. GeoDCAT-AP 3.0.0 has adopted Dataset Series in the same regard but has added the properties present on Dataset. These properties include the various roles as custodian, creator, user, etc.

Further the changes of DCAT-AP 2.1.1 to DCAT-AP 3.0.0 have been adopted in GeoDCAT-AP 3.0.0 to make both specifications fully aligned.

## **Alignment with DCAT-AP 3.0.0 details**

- Issue [9](https://github.com/SEMICeu/GeoDCAT-AP/issues/9): dcat:landingPage was added to Data Service.
- Issue [71](https://github.com/SEMICeu/GeoDCAT-AP/issues/71): The class dcat:DatasetSeries has been included.
- Issue [73](https://github.com/SEMICeu/GeoDCAT-AP/issues/73): dcat:hasVersion and dcat:version were added.
- Issue [75](https://github.com/SEMICeu/GeoDCAT-AP/issues/75): dcat:inSeries was added to the class dcat:Dataset.
- Issue [85](https://github.com/SEMICeu/GeoDCAT-AP/issues/85): The definition of Agent.type was aligned with DCAT-AP 3.0.0.
- Issue [86](https://github.com/SEMICeu/GeoDCAT-AP/issues/86): Update controlled vocabulary to be used for Distribution.availability.
- Issue [87](https://github.com/SEMICeu/GeoDCAT-AP/issues/87): Update definition of CatalogueRecord.changetype.
- Issue [89](https://github.com/SEMICeu/GeoDCAT-AP/issues/89): The range of spdx:algorithm was changed to spdx:ChecksumAlgorithm. The class spdx:ChecksumAlgorithm was added.
- Issue [90](http://90): dct:isVersionOf was deprecated and the example on foaf:PrimaryTopic was changed.
- Issue [91](https://github.com/SEMICeu/GeoDCAT-AP/issues/91): Range of dcat:byteSize was changed from xsd:decimal to xsd:nonNegativeInteger.
- Issue [92](https://github.com/SEMICeu/GeoDCAT-AP/issues/92): skos:notation was made mandatory for adms:Identifier and and its range was lifted to rdfs:Literal without specifying a mandatory type.
- Issue [93](https://github.com/SEMICeu/GeoDCAT-AP/issues/93): Temporal Literal data type was added.
- Issue [101](https://github.com/SEMICeu/GeoDCAT-AP/issues/101) & [109](https://github.com/SEMICeu/GeoDCAT-AP/issues/109): All properties, including those on Standard, are optional.
- Issue [108](https://github.com/SEMICeu/GeoDCAT-AP/issues/108): Usage of rdfs:label was changed to dct:description in specific cases.
- Issue [110](https://github.com/SEMICeu/GeoDCAT-AP/issues/110): Deleted example on Media Type.
- Issue [112](https://github.com/SEMICeu/GeoDCAT-AP/issues/112): Removal of dct:Agent in bindings overview and additional usage guides on foaf:Agent and prov:Agent.
- Issue [113](https://github.com/SEMICeu/GeoDCAT-AP/issues/113): Only allow license usage with license IRIs, mapping of non-IRI rights to RightsStatements using dct:rights.

## **Alignment with INSPIRE**

- Issue [56](https://github.com/SEMICeu/GeoDCAT-AP/issues/56): The NAL Frequency code list was updated to include values ‘AS_NEEDED’ and ‘NOT_PLANNED’ and mapped to the INSPIRE Maintenance frequency code list.

# **Alignment with the SEMIC Style Guide**

- Issue [94](https://github.com/SEMICeu/GeoDCAT-AP/issues/94): Introduction of geodcat:referenceSystem as subproperty of dct:conformsTo.
- Issue [95](https://github.com/SEMICeu/GeoDCAT-AP/issues/95): Introduction of geodcat:spatialResolutionAsText.

# **Bug fixes**

These are issues that point out editorial improvements.

- Issue [6](https://github.com/SEMICeu/GeoDCAT-AP/issues/6): The lack of support of CRS in GeoJSON was not explicitly mentioned.
- Issue [49](https://github.com/SEMICeu/GeoDCAT-AP/issues/49): The list of controlled vocabularies (10. Controlled Vocabularies) was updated.
- Issue [76](https://github.com/SEMICeu/GeoDCAT-AP/issues/76): Changed reference to draft of GeoSPARQL to latest release (1.1.0) since it has been released.
- Issue [83](https://github.com/SEMICeu/GeoDCAT-AP/issues/83): Typos were corrected in ‘Resource locator - \*On-line resource’ and the conformity example.
- Issue [96](https://github.com/SEMICeu/GeoDCAT-AP/issues/96): Usage note of DataService.geographicalCoverage was updated.
- Issue [97](https://github.com/SEMICeu/GeoDCAT-AP/issues/97): Usage note of Distribution.representationTechnique was updated.
- Issue [106](https://github.com/SEMICeu/GeoDCAT-AP/issues/106): Usage note of DataService.language was updated.
- Issue [107](https://github.com/SEMICeu/GeoDCAT-AP/issues/107): Usage note of dct:spatial was updated.
- Issue [98](https://github.com/SEMICeu/GeoDCAT-AP/issues/98): Removed note on Kind.
- Issue [129](https://github.com/SEMICeu/GeoDCAT-AP/issues/129): A section on usage of DCAT-AP for HVD in relation to GeoDCAT-AP 3.0.0 was added to the spec.

# **XSLT changes**

The following changes were done to the reference XSLT implementation:

- Update mapping to DCAT Dataset Series
- Issue [56](https://github.com/SEMICeu/GeoDCAT-AP/issues/56) adding mapping to 2 new concepts of the Frequency European NAL
- Issue [77](https://github.com/SEMICeu/GeoDCAT-AP/issues/77), [78](https://github.com/SEMICeu/GeoDCAT-AP/issues/78), [94](https://github.com/SEMICeu/GeoDCAT-AP/issues/94) and [114](https://github.com/SEMICeu/GeoDCAT-AP/issues/114) introducing specific subproperties of dct:conformsTo, dct:subject and dct:type
- Issue [95](https://github.com/SEMICeu/GeoDCAT-AP/issues/95) mapping spatial resolution as text to geodcat:spatialResolutionAsText instead of rdfs:comment
- Issue [108](https://github.com/SEMICeu/GeoDCAT-AP/issues/108) changing rdfs:label to dct:description for describing RightsStatements
- Issue [113](https://github.com/SEMICeu/GeoDCAT-AP/issues/113) changing handling of free-text licence and access rights statements
- Change output prefix from `geodcat` to `geodcatap` to avoid confusion with the upcoming OGC GeoDCAT
- Accepted community pull requests
  - Avoid error on multilingual organisation name (PR [#41](https://github.com/SEMICeu/iso-19139-to-dcat-ap/pull/41))
  - Update to XSLT v2 (PR [#42](https://github.com/SEMICeu/iso-19139-to-dcat-ap/pull/42))
  - Add support for multiple resource identifiers (PR [#42](https://github.com/SEMICeu/iso-19139-to-dcat-ap/pull/42))
  - Concatenate codespace with code if codespace is set (PR [#42](https://github.com/SEMICeu/iso-19139-to-dcat-ap/pull/42))
  - Add support for multiple deliveryPoint (PR [#43](https://github.com/SEMICeu/iso-19139-to-dcat-ap/pull/43))
