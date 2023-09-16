
export default () => {
    let Works = ` 
    
    <nav id="side-nav-content">

        <div class="side-nav" id="tab-buttons" role="tablist">
            <button class="nav-link-btn active" id="home-tab" type="button" role="tab" data-tab="home"
                aria-controls="home" aria-selected="true">
                <span class="noselect">
                    Home
                </span>
            </button>

            <button class="nav-link-btn" id="javascript-tab" type="button" role="tab" data-tab="javascript"
                aria-controls="javascript" aria-selected="false">
                <span class="noselect">
                    JS/TS
                </span>
            </button>

            <button class="nav-link-btn" id="react-tab" type="button" role="tab" data-tab="react"
                aria-controls="react" aria-selected="false">
                <span class="noselect">
                    React Vue
                </span>
            </button>

            <button class="nav-link-btn" id="node-tab" type="button" role="tab" data-tab="node"
                aria-controls="node" aria-selected="false">
                <span class="noselect">
                    Node Express
                </span>
            </button>

            <button class="nav-link-btn" id="astro-tab" type="button" role="tab" data-tab="astro"
                aria-controls="astro" aria-selected="false">
                <span class="noselect">
                    Astro
                </span>
            </button>

            <button class="nav-link-btn" id="php-tab" type="button" role="tab" data-tab="php"
                aria-controls="php" aria-selected="false">
                <span class="noselect">
                    PHP
                </span>
            </button>

        </div>

    </nav>

    <div class="tab-content-art" id="art-root">
            <div id="tab-content">

                <div class="tab-content" id="home" role="tabpanel" aria-labelledby="home-tab" tabindex="0">
                    Hi this is a little bit of my works
                </div>

                <div class="tab-content" id="javascript" role="tabpanel" aria-labelledby="javascript-tab"
                    tabindex="0">
                    <div class="row">
                        <div>
                            <div class="card-header">
                                JavaScript
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Works in Js Vanilla</h5>
                                <p class="card-text">
                                    this is a little description of the work
                                </p>
                                <a href="#link a nelyfi" class="btn">Go somewhere</a>
                            </div>
                            <div class="card-footer">
                                time of upload work
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-content" id="react" role="tabpanel" aria-labelledby="react-tab" tabindex="0">
                    <div class="row">
                        <div>
                            <div class="card-header">
                                React Vue
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">TypeScript</h5>
                                <p class="card-text">
                                    this is a little description of the work
                                </p>
                                <a href="youtube.com" class="btn">Go somewhere</a>
                            </div>
                            <div class="card-footer">
                                time of upload work
                            </div>
                        </div>
                    </div>
                </div>

                <div class="tab-content" id="node" role="tabpanel" aria-labelledby="node-tab" tabindex="0">
                    <div class="row">
                        <div>
                            <div class="card-header">
                                Node Express
                            </div>
                            <div class="card-body">
                                <h5 class="card-title">Works in Node</h5>
                                <p class="card-text">
                                    this is a little description of the work
                                </p>
                                <a href="#link a nelyfi" class="btn">Go somewhere</a>
                            </div>
                            <div class="card-footer">
                                time of upload work
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-content" id="astro" role="tabpanel" aria-labelledby="astro-tab" tabindex="0">
                <div class="row">
                    <div>
                        <div class="card-header">
                            Astro
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Works in Astro</h5>
                            <p class="card-text">
                                this is a little description of the work
                            </p>
                            <a href="#" class="btn">Go somewhere</a>
                        </div>
                        <div class="card-footer">
                            time of upload work
                        </div>
                    </div>
                </div>
            </div>

            <div class="tab-content" id="php" role="tabpanel" aria-labelledby="php-tab" tabindex="0">
                <div class="row">
                    <div>
                        <div class="card-header">
                            PHP
                        </div>
                        <div class="card-body">
                            <h5 class="card-title">Works in PHP</h5>
                            <p class="card-text">
                                this is a little description of the work
                            </p>
                            <a href="#link a nelyfi" class="btn">Go somewhere</a>
                        </div>
                        <div class="card-footer">
                            time of upload work
                        </div>
                    </div>
                </div>
            </div>

        </div>

<aside id="aside-root">
    <div class="aside-container" id="aside-root"></div>
</aside>


    `;
    const worksEl = document.createElement('section')
    worksEl.innerHTML = Works



    const tabButtons = worksEl.querySelectorAll('.nav-link-btn');
    const tabContents = worksEl.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            button.classList.add('active');

            const tabId = button.getAttribute('data-tab');
            const tabContent = document.getElementById(tabId);
            tabContent.classList.add('active');


        })
    })

    return worksEl
}