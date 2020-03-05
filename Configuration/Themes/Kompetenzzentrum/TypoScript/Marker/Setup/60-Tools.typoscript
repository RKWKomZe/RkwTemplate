//############################################################################
// Special markers
//############################################################################
page {
    10 {
        variables {
            //=================================================================
            websiteUrl = TEXT
            websiteUrl < plugin.tx_rkwbasics.libs.canonical.10
            websiteUrl {
                wrap >
            }

            websiteUrlEncoded < .websiteUrl
            websiteUrlEncoded.stdWrap.rawUrlEncode = 1

            //=================================================================
            printLink {
                value = <span>Drucken</span>
                typolink {
                    ATagParams = class="print-button button icon-printer"
                }
            }

            //=================================================================

            pageLayoutType = TEXT
            pageLayoutType.data = levelfield:-2,tx_rkwbasics_fe_layout_next_level,slide
            pageLayoutType.override.field = layout

            //=================================================================

            // Layout switch for microsites
            pageLayoutSwitch = TEXT
            pageLayoutSwitch.value = Default
            pageLayoutSwitch.override = Microsite
            pageLayoutSwitch.override.if.isTrue = {$plugin.tx_rkwtemplate_config.isMicrosite}

            //=================================================================

            topicCssClass = COA
            topicCssClass {
                30 = RECORDS
                30 {
                    source.field = tx_rkwbasics_department
                    tables = tx_rkwbasics_domain_model_department
                    conf.tx_rkwbasics_domain_model_department = TEXT
                    conf.tx_rkwbasics_domain_model_department {
                        value = topic-1
                        override.field = css_class
                    }
                }
            }

            //=================================================================

            topicName = COA
            topicName {
                30 = RECORDS
                30 {
                    source.data = levelfield: -1 , tx_rkwbasics_department, slide
                    tables = tx_rkwbasics_domain_model_department
                    conf.tx_rkwbasics_domain_model_department = TEXT
                    conf.tx_rkwbasics_domain_model_department {
                        field = name
                        override.field = internal_name
                    }

                    // Default value if empty
                    stdWrap.ifEmpty.cObject = COA
                    stdWrap.ifEmpty.cObject {
                        10 = TEXT
                        10.value = Default
                    }
                }
            }

            //=================================================================

            projectName = COA
            projectName {
                10 = RECORDS
                10 {
                    source.data = levelfield: -1 , tx_rkwprojects_project_uid, slide
                    tables = tx_rkwprojects_domain_model_projects
                    conf.tx_rkwprojects_domain_model_projects = TEXT
                    conf.tx_rkwprojects_domain_model_projects {
                        field = short_name
                        override.field = internal_name
                    }

                    // Default value if empty
                    stdWrap.ifEmpty.cObject = COA
                    stdWrap.ifEmpty.cObject {
                        10 = TEXT
                        10.value = Default
                    }
                }
            }

            //=================================================================

            projectLink < .projectName
            projectLink {
                10 {
                    conf.tx_rkwprojects_domain_model_projects {
                        field = name
                        override.field = short_name
                        stdWrap.typolink {
                            parameter.field = project_pid
                            ATagParams = class="link link--underlined"
                        }
                        if.isTrue.field = project_pid
                    }

                    stdWrap.ifEmpty.cObject >
                }
            }

            //=================================================================

            documentTypeName = COA
            documentTypeName {
                30 = RECORDS
                30 {
                    source.data = levelfield: -1, tx_rkwbasics_document_type, slide
                    tables = tx_rkwbasics_domain_model_documenttype
                    conf.tx_rkwbasics_domain_model_documenttype = TEXT
                    conf.tx_rkwbasics_domain_model_documenttype {
                        field = short_name
                        override.field = internal_name
                    }

                    // Default value if empty
                    stdWrap.ifEmpty.cObject = COA
                    stdWrap.ifEmpty.cObject {
                        10 = TEXT
                        10.value = Default
                    }
                }
            }
        }
    }
}

// set categories for eTracker accordingly!
// plugin.tx_rkwetracker.lib.categoryLevel1 < page.10.variables.topicName
// plugin.tx_rkwetracker.lib.categoryLevel2 < page.10.variables.projectName
// plugin.tx_rkwetracker.lib.categoryLevel3 < page.10.variables.documentTypeName
