plugin.tx_rkwbasics {
    persistence {
        // cat=plugin.tx_rkwbasics//a; type=string; label=Default storage PID
        storagePid = 3
    }

    settings {
        responsiveImages {
            breakpoints {
                // cat=plugin.tx_rkwbasics//a; type=integer; label=Breakpoint for mobile
                mobile = 320

                // cat=plugin.tx_rkwbasics//a; type=integer; label=Breakpoint for tablet
                tablet = 768

                // cat=plugin.tx_rkwbasics//a; type=integer; label=Breakpoint for desktop
                desktop = 1024
            }
        }
    }
}
