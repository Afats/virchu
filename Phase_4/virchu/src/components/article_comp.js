import React from 'react';
import Parser from 'html-react-parser';

var content = `
<!-- Articles-->
<section class="projects-section bg-light" id="articles">
    <div class="container">
        <!-- Featured Project Row-->
        <div class="row align-items-center no-gutters mb-4 mb-lg-5">
            <!-- <div class="col-xl-8 col-lg-7"><img class="img-fluid mb-3 mb-lg-0" src="assets/img/bg-masthead.jpg"
                    alt="..." /></div> -->
            <div class="col-xl-4 col-lg-5">
                <div class="featured-text text-center text-lg-left">
                    <h4>Articles</h4>
                    <p class="text-black-50 mb-0">Latest news</p>
                </div>
            </div>
        </div>
        <!-- Project One Row-->
        <div class="row justify-content-center no-gutters mb-5 mb-lg-0">
            <div class="col-lg-6"><img class="img-fluid" src="./qatari.png" alt="..." /></div>
            <div class="col-lg-6">
                <div class="bg-black text-center h-100 project">
                    <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-left">
                            <h4 class="text-white">The Qatari health ministry on Wednesday announced 940 new
                                COVID-19 infections.</h4>
                            <!-- <p class="mb-0 text-white-50">Article info and corresponding image/graph.</p> -->
                            <hr class="d-none d-lg-block mb-0 ml-0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Project Two Row-->
        <div class="row justify-content-center no-gutters">
            <div class="col-lg-6"><img class="img-fluid" src="./mos.png" alt="..." /></div>
            <div class="col-lg-6 order-lg-first">
                <div class="bg-black text-center h-100 project">
                    <div class="d-flex h-100">
                        <div class="project-text w-100 my-auto text-center text-lg-right">
                            <h4 class="text-white">FIJI - Naitasiri records 23 dengue fever cases

                                "As of this month, 23 cases of dengue fever and eight cases of leptospirosis were
                                recorded in the Naitasiri Province.."</h4>
                            <hr class="d-none d-lg-block mb-0 mr-0" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</section>
`;

function Article_comp() {
    return (
        <div className="content">{Parser(content)}</div>
    );
}


export default Article_comp;
