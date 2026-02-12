# **Consolidated Changelog**

This changelog provides an overview of the changes incorporated in GeoDCAT-AP 3.1.0. A complete list of the issues closed with this release is accessible on [GitHub](https://github.com/SEMICeu/GeoDCAT-AP/issues?q=is%3Aissue+is%3Aopen+label%3Arelease%3A3.1.0).

# **Editorial changes**

- Updated links from DCAT-AP 3.0.0 to DCAT-AP 3.0.1
- Propagated Period of time => Period of Time label change
- Propagated Catalog => Catalogue spelling change in Catalogue.applicableLegislation
- Changed Data Service format reuse type to "as-is"
- Adjusted A.7.13 Spatial resolution section [#144](https://github.com/SEMICeu/GeoDCAT-AP/issues/144)
- Restructured Controlled Vocabularies in alignment with DCAT-AP 3.0.1 and the new expected usage types
- Propagated AT LEAST 1 usage for the Theme CV [#138](https://github.com/SEMICeu/GeoDCAT-AP/issues/138)
- Fixed readability of even table rows [#160](https://github.com/SEMICeu/GeoDCAT-AP/issues/160)
- Support for HVD [#136](https://github.com/SEMICeu/GeoDCAT-AP/issues/136)
- Inconsistent `cnt:` prefix [#149](https://github.com/SEMICeu/GeoDCAT-AP/issues/149)
- `accessRights` usage note clarification [#150](https://github.com/SEMICeu/GeoDCAT-AP/issues/150)
- Change ADMS-AP spec link [#157](https://github.com/SEMICeu/GeoDCAT-AP/issues/157)
- Removed duplicate paragraph in Scope of this AP [#159](https://github.com/SEMICeu/GeoDCAT-AP/issues/159)
- Fixed chapter number in reference to controlled vocabularies [#161](https://github.com/SEMICeu/GeoDCAT-AP/issues/161)
- Make capitalization of application profile, open data portal and pan-European consistent[#168](https://github.com/SEMICeu/GeoDCAT-AP/issues/168)

## **Data model adaptations**

- Added `geodcatap:purpose` property [#154](https://github.com/SEMICeu/GeoDCAT-AP/issues/154) to Dataset, Dataset Series and Data Service
- Added Attribution usage note [#143](https://github.com/SEMICeu/GeoDCAT-AP/issues/143)
- Added proper support for Conformity and data quality pattern [#146](https://github.com/SEMICeu/GeoDCAT-AP/issues/146). This includes adding: `Entity`: `degree of conformity`, `description`, `qualified association`, `TestPlan`: `was derived from`, `Association`: `had plan`.
- Removed `dct:created` from CatalogueRecord [#151](https://github.com/SEMICeu/GeoDCAT-AP/issues/151)
- Removed INSPIRE Maintenance Frequency code list [#153](https://github.com/SEMICeu/GeoDCAT-AP/issues/153)
- Changed `geodcatap:referenceSystem` range to `skos:Concept` [#170](https://github.com/SEMICeu/GeoDCAT-AP/issues/170)

# **Alignment with DCAT-AP 3.0.1**
- Updated Maintenance information section [#56](https://github.com/SEMICeu/GeoDCAT-AP/issues/56), [#153](https://github.com/SEMICeu/GeoDCAT-AP/issues/153) and removed the INSPIRE Maintenance Frequency controlled vocabulary as the EU Vocabularies Frequency NAL is mandatory and fully covers the INSPIRE one
- Aligned `accessRights` CV usage [#84](https://github.com/SEMICeu/GeoDCAT-AP/issues/84)
- Media Type and Media Type or Extent are now supportive entities instead of Datatypes [#155](https://github.com/SEMICeu/GeoDCAT-AP/issues/155)

# **Alignment with INSPIRE**
- Mentioned the INSPIRE HVD tagging good practice, its implementation in the XSLT, and its limitations in the HVD section

# **Alignment with the SEMIC Style Guide**

# **Bug fixes**

These are issues that point out editorial improvements.

- Changed link from DCAT-AP HVD 2.2.0 to 3.0.0 in the Legal section
- Fixed DataService example to use `geodcatap:referenceSystem` [#166](https://github.com/SEMICeu/GeoDCAT-AP/issues/166)