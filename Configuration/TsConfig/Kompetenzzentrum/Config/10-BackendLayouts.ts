mod {
    web_layout {
        BackendLayouts {
            //======================================
            // Home
            //======================================
            homePages {
                title = Home
                config {
                    backend_layout {
                        colCount = 2
                        rowCount = 8
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = Slider
                                        colPos = 4
                                    }

                                    2 {
                                        name = Ähnliche Artikel
                                        rowspan = 6
                                        colPos = 7
                                    }
                                }
                            }

                            2 {
                                columns {
                                    1 {
                                        name = Aufgabe
                                        colPos = 12
                                    }
                                }
                            }

                            3 {
                                columns {
                                    1 {
                                        name = Themen
                                        colPos = 13
                                    }
                                }
                            }

                            4 {
                                columns {
                                    1 {
                                        name = Video (nur HTML-Elemente)
                                        colPos = 15
                                    }
                                }
                            }

                            5 {
                                columns {
                                    1 {
                                        name = News
                                        colPos = 16
                                    }
                                }
                            }

                            6 {
                                columns {
                                    1 {
                                        name = Das RKW
                                        colPos = 0
                                    }
                                }
                            }

                            7 {
                                columns {
                                    1 {
                                        name = Logo-Leiste I
                                        colPos = 5
                                    }
                                }
                            }

                            8 {
                                columns {
                                    1 {
                                        name = Logo-Leiste II
                                        colPos = 14
                                    }
                                }
                            }
                        }
                    }
                }
            }

            //======================================
            // Map page
            //======================================
            rkwMaps {
                title = RKW Karte
                config {
                    backend_layout {
                        colCount = 2
                        rowCount = 2
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = Aufgabe
                                        colPos = 12
                                    }

                                    2 {
                                        name = Ähnliche Artikel
                                        rowspan = 2
                                        colPos = 7
                                    }
                                }
                            }

                            2 {
                                columns {
                                    1 {
                                        name = Boxen
                                        colPos = 13
                                    }
                                }
                            }
                        }
                    }
                }
            }


            //======================================
            // Topic Pages
            //======================================
            topicPages {
                title = Themenseiten / Mein RKW
                config {
                    backend_layout {
                        colCount = 2
                        rowCount = 8
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = Inhalt
                                        colPos = 0
                                    }

                                    2 {
                                        name = Rechte Spalte
                                        colPos = 2
                                        rowspan = 2

                                    }
                                }
                            }

                            2 {
                                columns {
                                    1 {
                                        name = Call-To-Action
                                        colPos = 18
                                    }
                                }
                            }

                            3 {
                                columns {
                                    1 {
                                        name = Boxen 1 - NUR für Publikationen und Tools verwenden!
                                        colspan = 2
                                        colPos = 9
                                    }
                                }
                            }

                            4 {
                                columns {
                                    1 {
                                        name = Kooperationen und Partner (Datensatzsammlung, Headline variabel)
                                        colspan = 2
                                        colPos = 8
                                    }
                                }
                            }

                            5 {
                                columns {
                                    1 {
                                        name = Boxen 2 - Für weitere Inhalte
                                        colspan = 2
                                        colPos = 6
                                    }
                                }
                            }

                            6 {
                                columns {
                                    1 {
                                        name = Boxen 2 - Für weitere Inhalte (nur für Artikel-Unterseiten)
                                        colspan = 2
                                        colPos = 17
                                    }
                                }
                            }

                            7 {
                                columns {
                                    1 {
                                        name = Referenzen
                                        colspan = 2
                                        colPos = 5
                                    }
                                }
                            }
                        }
                    }
                }
            }

            //======================================
            // Content Pages
            //======================================
            contentPages {
                title = Inhalt plus Boxen
                config {
                    backend_layout {
                        colCount = 1
                        rowCount = 3
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = Inhalt
                                        colPos = 0
                                    }
                                }
                            }

                            2 {
                                columns {
                                    1 {
                                        name = Call-To-Action
                                        colPos = 18
                                    }
                                }
                            }

                            3 {
                                columns {
                                    1 {
                                        name = Boxen
                                        colPos = 17
                                    }
                                }
                            }
                        }
                    }
                }
            }


            //======================================
            // Publication Pages
            //======================================
            publicationPages < .contentPages
            publicationPages {
                title = Publikationen
                config.backend_layout {
                    rowCount = 2
                    rows {
                        2 {
                            columns {
                                1 {
                                    name = Boxen
                                    colPos = 3
                                }
                            }
                        }
                    }
                }
            }


            //======================================
            // Nur Plugin
            //======================================
            pluginOnlyPages {
                title = Nur Plugin
                config {
                    backend_layout {
                        colCount = 1
                        rowCount = 1
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = Plugin
                                        colPos = 6
                                    }
                                }
                            }
                        }
                    }
                }
            }

            //======================================
            // Expert Pages Details
            //======================================
            expertPagesDetail {
                title = Experten Detail
                config {
                    backend_layout {
                        colCount = 1
                        rowCount = 3
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = Überschrift
                                        colPos = 11
                                    }
                                }
                            }

                            2 {
                                columns {
                                    1 {
                                        name = Inhalte
                                        colPos = 0
                                    }
                                }
                            }

                            3 {
                                columns {
                                    1 {
                                        name = Boxen 1 - Für weitere Inhalte
                                        colPos = 6
                                    }
                                }
                            }
                        }
                    }
                }
            }

            //======================================
            // Event Detials
            //======================================
            eventsDetail {
                title = Veranstaltungen Detail
                config {
                    backend_layout {
                        colCount = 2
                        rowCount = 2
                        rows {
                            1 {
                                columns {
                                    1 {
                                        name = Inhalt
                                        colPos = 0
                                    }

                                    2 {
                                        name = Ähnliche Artikel
                                        rowspan = 2
                                        colPos = 7
                                    }
                                }
                            }

                            2 {
                                columns {
                                    1 {
                                        name = Boxen
                                        colPos = 6
                                    }
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}