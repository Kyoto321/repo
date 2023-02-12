import React from './footer.css'

export default function Footer() {
  return (
    <body class="body">
        <footer class="footer footer-desktop">
            <div class="footer-row footer-row-top">
                <div class="footer-robot robot-icon robot-icon-"></div>
                <div class="footer-categories">
                    <span class="title">Categories</span>
                    <ul class="footer-categories-links">

                    <li class="circuits "><a href="#"><div class="category-icon icon-category-circuits"></div>Tech
                            </a></li><li class="workshop "><a href="#"><div class="category-icon icon-category-workshop"></div>Social Skills 

                            </a></li><li class="living "><a href="Lifestyle"><div class="category-icon icon-category-living"></div>Lifestyle
                            </a></li><li class="outside "><a href="/outside/"><div class="category-icon icon-category-outside"></div>Fun facts
                            </a></li><li class="teachers "><a href="/teachers/"><div class="category-icon icon-category-teachers"></div>Relationships
                            </a></li>
                    </ul>
                </div>

                <div class="footer-resources">
                    <span class="title">Resources</span>
                    <ul>
                        <li>
                            <a href="/sitemap/">Sitemap</a>
                        </li>
                        
                        <li>
                            <a href="/how-to-write-a-great-instructable/">Help</a>
                        </li>
                        
                        <li><a href="/contact/">Contact</a>
                        </li>
                    </ul>
                </div>
                
                <div>
                    <span class="title">Find Us</span>
                    <ul>
                        <li><a class="instagram" href="#" title="Instagram">
                                <i class="topIcon fab fa-instagram-square"></i>
                            </a>
                        </li>
                        
                
                        
                        <li><a class="facebook" href="#" title="Facebook">
                                <i class="topIcon fab fa-facebook-square"></i>
                            </a>
                        </li>
                        
                        <li><a class="twitter" href="#" title="Twitter">
                                <i className="topIcon fab fa-twitter-square"></i>
                            </a>
                        </li>
                    </ul>
                </div>

            </div>
            <div class="footer-rule"><hr/></div>

            <div class ="footer-row footer-row-bottom">
                <div class="footer-links">
                    <p>© 2023 Pillow, Inc.</p>
                    <ul class="footer-links-list">
                        <li>
                            <a href="#" target="_blank">Terms of Service</a><span class="divider">|</span>
                        </li>
                        <li>
                            <a href="#" target="_blank">Privacy Statement</a><span class="divider">|</span>
                        </li>
                        <li>
                            <a data-opt-in-preferences="" data-multi-optout-preferences="en" data-wat-linkname="manage-privacy-settings-footer-link" href="javascript:;">Privacy settings</a><span class="divider">|</span></li><li><a href="#" target="_blank">Legal Notices &amp; Trademarks</a>
                        </li>
                        </ul>
                       
                </div>
            </div>
        </footer>
    </body>
  )
}
