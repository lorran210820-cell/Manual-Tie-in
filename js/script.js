/* =========================================================
   TIE-IN DIGITAL
   TR-2091KS-03 × CT-2032KS-08
   Projeto Serra Sul S11D

   JavaScript Vanilla
   ========================================================= */


/* =========================================================
   HELPERS
========================================================= */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];


/* =========================================================
   DADOS DA APLICAÇÃO
========================================================= */

const data = {

    /* -----------------------------------------------------
       ACESSO RÁPIDO
    ----------------------------------------------------- */

    quick: [
        ["Visão Geral", "visao"],
        ["Escopo", "escopo"],
        ["Cronograma", "cronograma"],
        ["Mapa / 3D", "mapa"],
        ["Go / No-Go", "prontidao"],
        ["Equipe", "equipe"],
        ["Segurança", "seguranca"],
        ["Qualidade", "qualidade"],
        ["Documentos", "documentos"],
        ["Acompanhamento", "acompanhamento"]
    ],


    /* -----------------------------------------------------
       ESCOPO
    ----------------------------------------------------- */

    scopes: {

        Estrutural: [
            "Passadiço",
            "Plataformas",
            "Suportes",
            "Adequações",
            "Conexões",
            "Alinhamento",
            "Nivelamento",
            "Prumo"
        ],

        Mecânica: [
            "Mesas",
            "Roletes",
            "Guias",
            "Calha de transição",
            "Proteções",
            "Componentes do transportador"
        ],

        Elétrica: [
            "Desenergização",
            "Bloqueio",
            "Aterramento",
            "Infraestrutura",
            "Cabos",
            "Conexões",
            "Testes elétricos"
        ],

        Correia: [
            "Preparação",
            "Lançamento da lona",
            "Posicionamento",
            "Emenda",
            "Vulcanização",
            "Tensionamento",
            "Alinhamento"
        ],

        Comissionamento: [
            "Inspeções",
            "Testes",
            "Verificação de integridade",
            "Liberação",
            "Reenergização",
            "Retorno operacional"
        ]
    },


    /* -----------------------------------------------------
       CRONOGRAMA

       DADOS DEMONSTRATIVOS.
       Não representam o cronograma oficial.
    ----------------------------------------------------- */

    schedule: [

        [
            "Preparação e mobilização",
            "11/01",
            "12/01",
            "2 dias"
        ],

        [
            "Parada e bloqueio SE-2032KS-03",
            "13/01",
            "13/01",
            "1 dia"
        ],

        [
            "Adequação estrutural",
            "14/01",
            "17/01",
            "4 dias"
        ],

        [
            "Montagem mecânica",
            "18/01",
            "21/01",
            "4 dias"
        ],

        [
            "Infraestrutura elétrica e cabos",
            "18/01",
            "23/01",
            "6 dias"
        ],

        [
            "Lançamento da correia e vulcanização",
            "24/01",
            "27/01",
            "4 dias"
        ],

        [
            "Testes e comissionamento",
            "28/01",
            "29/01",
            "2 dias"
        ],

        [
            "Liberação para operação",
            "30/01",
            "30/01",
            "1 dia"
        ]
    ],


    /* -----------------------------------------------------
       GO / NO-GO

       DADOS DEMONSTRATIVOS.
    ----------------------------------------------------- */

    readiness: [

        {
            name: "Projeto liberado",
            done: true,
            critical: true
        },

        {
            name: "Materiais disponíveis",
            done: true,
            critical: true
        },

        {
            name: "Equipe mobilizada",
            done: true,
            critical: true
        },

        {
            name: "ART e PTS",
            done: true,
            critical: true
        },

        {
            name: "Bloqueio planejado",
            done: true,
            critical: true
        },

        {
            name: "Equipamentos",
            done: false,
            critical: true
        },

        {
            name: "Equipe de vulcanização",
            done: false,
            critical: true
        },

        {
            name: "Inspeções definidas",
            done: true,
            critical: false
        }

    ],


    /* -----------------------------------------------------
       SEQUÊNCIA EXECUTIVA
    ----------------------------------------------------- */

    timeline: [

        "Preparação",

        "Parada Programada",

        "Bloqueio / LOTO",

        "Verificação de Energia Zero",

        "Aterramento Temporário",

        "Adequações Estruturais",

        "Interligação Estrutural",

        "Montagem Mecânica",

        "Infraestrutura Elétrica",

        "Lançamento de Cabos",

        "Lançamento da Correia",

        "Vulcanização",

        "Inspeções",

        "Testes",

        "Comissionamento",

        "Retirada dos Bloqueios",

        "Reenergização",

        "Liberação Operacional"
    ],


    /* -----------------------------------------------------
       ACOMPANHAMENTO

       DADOS DEMONSTRATIVOS.
    ----------------------------------------------------- */

    overallProgress: 35,

    progress: {

        Estrutural: 50,

        Mecânica: 30,

        Elétrica: 20,

        Correia: 0,

        Comissionamento: 0

    },


    nextActivity: {

        title: "Montagem mecânica",

        description: "Mesas / roletes",

        date: "18/01/2027"

    },


    /* -----------------------------------------------------
       EQUIPE
    ----------------------------------------------------- */

    team: [

        "Engenharia / Supervisão",

        "Encarregado",

        "Técnico de Segurança",

        "Inspetor de Solda / Dimensional",

        "Eletricistas Força e Controle",

        "Eletricista Montador",

        "Montadores Mecânicos",

        "Operador de Munck",

        "Operador de Guindaste",

        "Motorista / Veículo de Apoio"

    ],


    /* -----------------------------------------------------
       EQUIPAMENTOS
    ----------------------------------------------------- */

    equipment: [

        "Guindaste",

        "Caminhão Munck",

        "Geradores",

        "Andaimes",

        "Detector de tensão",

        "Aterramento temporário",

        "Equipamentos de sinalização",

        "Ferramentas elétricas",

        "Equipamentos de trabalho em altura"

    ],


    /* -----------------------------------------------------
       SEGURANÇA
    ----------------------------------------------------- */

    risks: [

        "Risco elétrico",

        "Trabalho em altura",

        "Içamento",

        "Interferências",

        "Equipamentos móveis",

        "Atividade simultânea"

    ],


    /* -----------------------------------------------------
       QUALIDADE
    ----------------------------------------------------- */

    quality: [

        "Inspeção dimensional",

        "Verificação de alinhamento",

        "Nivelamento / Prumo",

        "Inspeção de soldagem",

        "Torqueamento de conexões",

        "Inspeção da emenda / vulcanização",

        "Registros de inspeção",

        "Checklists",

        "Critérios de liberação"

    ],


    /* -----------------------------------------------------
       DOCUMENTOS
    ----------------------------------------------------- */

    docs: [

        [
            "Manual do Tie-in",
            "PDF",
            "assets/docs/manual-tiein.pdf",
            true
        ],

        [
            "Plano de Trabalho",
            "PDF",
            "assets/docs/plano-trabalho.pdf",
            true
        ],

        [
            "Cronograma Integrado",
            "PDF",
            "assets/docs/cronograma.pdf",
            true
        ],

        [
            "Desenhos de Referência",
            "DWG / PDF",
            "",
            false
        ],

        [
            "Procedimento de Vulcanização",
            "PDF",
            "",
            false
        ],

        [
            "ART",
            "PDF",
            "",
            false
        ],

        [
            "PTS",
            "PDF",
            "",
            false
        ],

        [
            "Checklists",
            "PDF / XLSX",
            "",
            false
        ],

        [
            "RAC's / Normas",
            "PDF",
            "",
            false
        ],

        [
            "Relatórios",
            "PDF",
            "",
            false
        ]

    ],


    /* -----------------------------------------------------
       EVIDÊNCIAS

       Conforme novas nomenclaturas das imagens.
    ----------------------------------------------------- */

    evidence: [

        [
            "antes",
            "assets/img/Campo_01.jpg",
            "Registro inicial do local"
        ],

        [
            "durante",
            "assets/img/Campo_02.jpg",
            "Evidência de execução"
        ]

    ]

};


/* =========================================================
   RENDERIZAÇÃO
========================================================= */

function render() {

    renderQuickMenu();

    renderScopes();

    renderSchedule();

    renderReadiness();

    renderTimeline();

    renderProgress();

    renderTeam();

    renderEquipment();

    renderRisks();

    renderQuality();

    renderDocuments();

    renderEvidence();

    hydrateImages();

}


/* =========================================================
   ACESSO RÁPIDO
========================================================= */

function renderQuickMenu() {

    const container = $("#quick");

    if (!container) return;


    container.innerHTML = data.quick
        .map(item => {

            const [label, target] = item;

            return `
                <a href="#${target}">
                    ${label}
                </a>
            `;

        })
        .join("");

}


/* =========================================================
   ESCOPO
========================================================= */

function renderScopes() {

    const container = $("#scopeGrid");

    if (!container) return;


    container.innerHTML = Object
        .entries(data.scopes)
        .map(([discipline, items], index) => {

            return `

                <article class="scope-card card">

                    <span class="num">
                        ${String(index + 1).padStart(2, "0")}
                    </span>

                    <h3>
                        ${discipline}
                    </h3>

                    <ul>

                        ${items
                            .map(item => `<li>${item}</li>`)
                            .join("")
                        }

                    </ul>

                </article>

            `;

        })
        .join("");

}


/* =========================================================
   CRONOGRAMA
========================================================= */

function renderSchedule() {

    const container = $("#scheduleBody");

    if (!container) return;


    container.innerHTML = data.schedule
        .map((item, index) => {

            return `

                <tr>

                    <td>
                        ${String(index + 1).padStart(2, "0")}
                    </td>

                    <td>
                        <b>
                            ${item[0]}
                        </b>
                    </td>

                    <td>
                        ${item[1]}
                    </td>

                    <td>
                        ${item[2]}
                    </td>

                    <td>
                        ${item[3]}
                    </td>

                    <td>

                        <span class="badge">
                            Planejado
                        </span>

                    </td>

                </tr>

            `;

        })
        .join("");

}


/* =========================================================
   GO / NO-GO
========================================================= */

function renderReadiness() {

    const total = data.readiness.length;

    const completed =
        data.readiness.filter(item => item.done).length;


    const percentage =
        total > 0
            ? Math.round((completed / total) * 100)
            : 0;


    const criticalItems =
        data.readiness.filter(item => item.critical);


    const go =
        criticalItems.length > 0 &&
        criticalItems.every(item => item.done);


    const pctElement = $("#readyPct");

    const gauge = $("#gauge");

    const status = $("#goStatus");

    const list = $("#readinessList");


    if (pctElement) {

        pctElement.textContent =
            `${percentage}%`;

    }


    if (gauge) {

        gauge.style.setProperty(
            "--pct",
            `${percentage}%`
        );

    }


    if (status) {

        status.textContent =
            go ? "GO" : "NO-GO";


        status.style.color =
            go
                ? "var(--success)"
                : "var(--danger)";

    }


    if (list) {

        list.innerHTML = data.readiness
            .map(item => {

                return `

                    <div class="check-item">

                        <span>

                            ${item.name}

                            ${
                                item.critical
                                    ? "<small> · crítico</small>"
                                    : ""
                            }

                        </span>


                        <b class="${item.done ? "ok" : "warn"}">

                            ${
                                item.done
                                    ? "✓ APROVADO"
                                    : "! PENDENTE"
                            }

                        </b>

                    </div>

                `;

            })
            .join("");

    }

}


/* =========================================================
   TIMELINE
========================================================= */

function renderTimeline() {

    const container = $("#timeline");

    if (!container) return;


    container.innerHTML = data.timeline
        .map((item, index) => {

            return `

                <div class="step">

                    <i></i>

                    <b>
                        ${String(index + 1).padStart(2, "0")}
                    </b>

                    <span>
                        ${item}
                    </span>

                </div>

            `;

        })
        .join("");

}


/* =========================================================
   ACOMPANHAMENTO
========================================================= */

function renderProgress() {

    const bars = $("#progressBars");

    const donut = $("#overallDonut");

    const pct = $("#overallPct");


    if (bars) {

        bars.innerHTML = Object
            .entries(data.progress)
            .map(([discipline, value]) => {

                return `

                    <div class="bar">

                        <div class="bar-head">

                            <b>
                                ${discipline}
                            </b>

                            <span>
                                ${value}%
                            </span>

                        </div>


                        <div class="track">

                            <div
                                class="fill"
                                style="width:${value}%"
                            ></div>

                        </div>

                    </div>

                `;

            })
            .join("");

    }


    if (donut) {

        donut.style.setProperty(
            "--pct",
            `${data.overallProgress}%`
        );

    }


    if (pct) {

        pct.textContent =
            `${data.overallProgress}%`;

    }

}


/* =========================================================
   EQUIPE
========================================================= */

function renderTeam() {

    const container = $("#team");

    if (!container) return;


    container.innerHTML = data.team
        .map(item => {

            return `

                <div class="list-item">
                    ${item}
                </div>

            `;

        })
        .join("");

}


/* =========================================================
   EQUIPAMENTOS
========================================================= */

function renderEquipment() {

    const container = $("#equipment");

    if (!container) return;


    container.innerHTML = data.equipment
        .map(item => {

            return `

                <div class="list-item">
                    ${item}
                </div>

            `;

        })
        .join("");

}


/* =========================================================
   SEGURANÇA
========================================================= */

function renderRisks() {

    const container = $("#risks");

    if (!container) return;


    container.innerHTML = data.risks
        .map(item => {

            return `

                <article class="risk-card card">

                    <h3>
                        ${item}
                    </h3>

                    <p>
                        Controle a detalhar conforme análise
                        de risco e documentação oficial.
                    </p>

                </article>

            `;

        })
        .join("");

}


/* =========================================================
   QUALIDADE
========================================================= */

function renderQuality() {

    const container = $("#quality");

    if (!container) return;


    const statuses = [
        "Em inspeção",
        "Pendente",
        "Liberado"
    ];


    container.innerHTML = data.quality
        .map((item, index) => {

            const status =
                statuses[index % statuses.length];


            return `

                <article class="quality-card card">

                    <h3>
                        ${item}
                    </h3>

                    <p>
                        Registro e critério conforme
                        documentação aplicável.
                    </p>

                    <span class="qstatus">
                        ${status}
                    </span>

                </article>

            `;

        })
        .join("");

}


/* =========================================================
   DOCUMENTOS
========================================================= */

function renderDocuments() {

    const container = $("#docs");

    if (!container) return;


    container.innerHTML = data.docs
        .map(item => {

            const [
                name,
                type,
                path,
                available
            ] = item;


            return `

                <div class="doc-row">

                    <div class="doc-icon">
                        ▤
                    </div>

                    <b>
                        ${name}
                    </b>

                    <span>
                        ${type}
                    </span>

                    <span>
                        ${available ? "Previsto" : "Pendente"}
                    </span>

                    <button
                        type="button"
                        data-doc="${path}"
                    >
                        Abrir
                    </button>

                </div>

            `;

        })
        .join("");

}


/* =========================================================
   EVIDÊNCIAS
========================================================= */

function renderEvidence() {

    const container = $("#evidence");

    if (!container) return;


    container.innerHTML = data.evidence
        .map(item => {

            const [
                type,
                image,
                description
            ] = item;


            return `

                <article
                    class="evidence-card project-image"
                    data-kind="${type}"
                    data-src="${image}"
                >

                    <div class="placeholder">

                        <b>
                            IMAGEM DO PROJETO
                        </b>

                        <small>
                            ${image}
                        </small>

                    </div>


                    <div class="evidence-meta">

                        <small>
                            ${type.toUpperCase()}
                        </small>

                        <b>
                            ${description}
                        </b>

                    </div>

                </article>

            `;

        })
        .join("");

}


/* =========================================================
   CARREGAMENTO DE IMAGENS
========================================================= */

function loadProjectImage(element) {

    if (!element) return;


    const src = element.dataset.src;


    if (!src) return;


    const placeholder =
        $(".placeholder", element);


    const placeholderPath =
        $(".placeholder small", element);


    if (placeholderPath) {

        placeholderPath.textContent = src;

    }


    /*
       Remove a imagem anterior enquanto
       a nova está sendo carregada.
    */

    element.style.backgroundImage = "";


    if (placeholder) {

        placeholder.style.display = "flex";

    }


    const image = new Image();


    image.onload = () => {

        element.style.backgroundImage =
            `url("${src}")`;


        if (placeholder) {

            placeholder.style.display = "none";

        }

    };


    image.onerror = () => {

        element.style.backgroundImage = "";


        if (placeholder) {

            placeholder.style.display = "flex";

        }

    };


    image.src = src;

}


function hydrateImages() {

    $$(".project-image").forEach(element => {

        loadProjectImage(element);

    });

}


/* =========================================================
   MAPA / 3D
========================================================= */

function initMapViewer() {

    const buttons =
        $$(".map-toolbar button");


    const mapView =
        $("#mapView");


    if (!mapView || !buttons.length) return;


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                buttons.forEach(item => {

                    item.classList.remove("active");

                });


                button.classList.add("active");


                const imagePath =
                    button.dataset.map;


                if (!imagePath) return;


                mapView.dataset.src =
                    imagePath;


                loadProjectImage(mapView);

            }
        );

    });

}


/* =========================================================
   MENU MOBILE
========================================================= */

function initMobileMenu() {

    const button = $("#hamb");

    const nav = $("#nav");


    if (!button || !nav) return;


    button.addEventListener(
        "click",
        () => {

            const open =
                nav.classList.toggle("open");


            button.setAttribute(
                "aria-expanded",
                String(open)
            );

        }
    );


    $$("#nav a").forEach(link => {

        link.addEventListener(
            "click",
            () => {

                nav.classList.remove("open");

                button.setAttribute(
                    "aria-expanded",
                    "false"
                );

            }
        );

    });

}


/* =========================================================
   MODAL
========================================================= */

const modal = $("#modal");


function openModal(html) {

    if (!modal) return;


    const content =
        $("#modalContent");


    if (content) {

        content.innerHTML = html;

    }


    modal.classList.add("open");

    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.classList.add(
        "modal-open"
    );

}


function closeModal() {

    if (!modal) return;


    modal.classList.remove("open");

    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.classList.remove(
        "modal-open"
    );

}


function initModal() {

    if (!modal) return;


    const close =
        $("#modalClose");


    if (close) {

        close.addEventListener(
            "click",
            closeModal
        );

    }


    modal.addEventListener(
        "click",
        event => {

            if (event.target === modal) {

                closeModal();

            }

        }
    );


    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Escape" &&
                modal.classList.contains("open")
            ) {

                closeModal();

            }

        }
    );

}


/* =========================================================
   AMPLIAR IMAGEM DO MAPA
========================================================= */

function initImageExpand() {

    const button =
        $("#expand");


    const mapView =
        $("#mapView");


    if (!button || !mapView) return;


    button.addEventListener(
        "click",
        () => {

            const src =
                mapView.dataset.src;


            if (!src) return;


            openModal(`

                <div class="image-modal-content">

                    <img
                        src="${src}"
                        alt="Visualização ampliada do Tie-in"
                        class="modal-project-image"
                        onerror="
                            this.style.display='none';
                            this.nextElementSibling.style.display='flex';
                        "
                    >

                    <div
                        class="modal-image-placeholder"
                        style="
                            display:none;
                            min-height:400px;
                            align-items:center;
                            justify-content:center;
                            flex-direction:column;
                            text-align:center;
                        "
                    >

                        <b>
                            IMAGEM DO PROJETO
                        </b>

                        <small>
                            ${src}
                        </small>

                    </div>

                </div>

            `);

        }
    );

}


/* =========================================================
   TOAST
========================================================= */

let toastTimer;


function toast(message) {

    const element =
        $("#toast");


    if (!element) return;


    clearTimeout(toastTimer);


    element.textContent =
        message;


    element.classList.add(
        "show"
    );


    toastTimer = setTimeout(
        () => {

            element.classList.remove(
                "show"
            );

        },
        2600
    );

}


/* =========================================================
   DOCUMENTOS
========================================================= */

function initDocuments() {

    const container =
        $("#docs");


    if (!container) return;


    container.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "button[data-doc]"
                );


            if (!button) return;


            const path =
                button.dataset.doc;


            if (path) {

                window.open(
                    path,
                    "_blank",
                    "noopener"
                );

            } else {

                toast(
                    "Documento ainda não disponibilizado."
                );

            }

        }
    );

}


/* =========================================================
   REGISTRAR
========================================================= */

function initRegister() {

    const button =
        $("#register");


    if (!button) return;


    button.addEventListener(
        "click",
        () => {

            openModal(`

                <div
                    style="
                        padding:35px 10px;
                        text-align:center;
                    "
                >

                    <h3>
                        Registrar
                    </h3>

                    <p>
                        Funcionalidade prevista
                        para versão futura.
                    </p>

                </div>

            `);

        }
    );

}


/* =========================================================
   FILTRO DE EVIDÊNCIAS
========================================================= */

function initEvidenceFilters() {

    const buttons =
        $$(".filters button");


    if (!buttons.length) return;


    buttons.forEach(button => {

        button.addEventListener(
            "click",
            () => {

                buttons.forEach(item => {

                    item.classList.remove(
                        "active"
                    );

                });


                button.classList.add(
                    "active"
                );


                const filter =
                    button.dataset.filter;


                $$(".evidence-card")
                    .forEach(card => {

                        const visible =
                            filter === "all" ||
                            card.dataset.kind === filter;


                        card.style.display =
                            visible
                                ? "block"
                                : "none";

                    });

            }
        );

    });

}


/* =========================================================
   VOLTAR AO TOPO
========================================================= */

function initBackToTop() {

    const button =
        $("#topBtn");


    if (!button) return;


    const updateButton = () => {

        button.classList.toggle(
            "show",
            window.scrollY > 500
        );

    };


    window.addEventListener(
        "scroll",
        updateButton,
        { passive: true }
    );


    updateButton();


    button.addEventListener(
        "click",
        () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


/* =========================================================
   BUSCA
========================================================= */

function initSearch() {

    const button =
        $("#searchBtn");


    if (!button) return;


    button.addEventListener(
        "click",
        () => {

            toast(
                "Busca preparada para evolução futura."
            );

        }
    );

}


/* =========================================================
   SCROLL SUAVE
========================================================= */

function initSmoothScroll() {

    $$('a[href^="#"]')
        .forEach(link => {

            link.addEventListener(
                "click",
                event => {

                    const href =
                        link.getAttribute("href");


                    if (
                        !href ||
                        href === "#"
                    ) {

                        return;

                    }


                    const target =
                        $(href);


                    if (!target) return;


                    event.preventDefault();


                    target.scrollIntoView({

                        behavior: "smooth",

                        block: "start"

                    });

                }
            );

        });

}


/* =========================================================
   INICIALIZAÇÃO
========================================================= */

function init() {

    /*
       Primeiro criamos todo o conteúdo
       dinâmico da página.
    */

    render();


    /*
       Depois ativamos as interações.
    */

    initMobileMenu();

    initMapViewer();

    initModal();

    initImageExpand();

    initDocuments();

    initRegister();

    initEvidenceFilters();

    initBackToTop();

    initSearch();

    initSmoothScroll();

}


/* =========================================================
   START
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    init
);
