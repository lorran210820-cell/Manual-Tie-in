/* =========================================================
   TIE-IN DIGITAL
   TR-2091KS-03 × CT-2032KS-08
   PROJETO SERRA SUL S11D
   ENESA ENGENHARIA
========================================================= */


/* =========================================================
   01. HELPERS
========================================================= */

const $ = (selector, parent = document) =>
    parent.querySelector(selector);

const $$ = (selector, parent = document) =>
    [...parent.querySelectorAll(selector)];


/* =========================================================
   02. BASE DE DADOS DO PLANO
========================================================= */

const data = {

    /* -----------------------------------------------------
       NAVEGAÇÃO RÁPIDA
    ----------------------------------------------------- */

    quick: [
        ["Visão Geral", "visao"],
        ["Escopo", "escopo"],
        ["Contexto / 3D", "mapa"],
        ["Jornada", "jornada"],
        ["Cronograma", "cronograma"],
        ["Passo a Passo", "execucao"],
        ["Go / No-Go", "prontidao"],
        ["Responsabilidades", "responsabilidades"],
        ["Equipe", "equipe"],
        ["Equipamentos", "equipamentos"],
        ["Segurança", "seguranca"],
        ["Qualidade", "qualidade"],
        ["Documentos", "documentos"],
        ["Acompanhamento", "acompanhamento"],
        ["Emergência", "emergencia"],
        ["Responsáveis", "responsaveis"]
    ],


    /* -----------------------------------------------------
       ESCOPO
    ----------------------------------------------------- */

    scopes: {

        "Estrutural": [
            "Passadiços",
            "Plataformas",
            "Suportes",
            "Adequações estruturais",
            "Conexões",
            "Alinhamento",
            "Nivelamento",
            "Prumo"
        ],

        "Mecânica": [
            "Mesas",
            "Roletes",
            "Guias",
            "Calha de transição",
            "Proteções",
            "Componentes do transportador",
            "Interligação mecânica"
        ],

        "Elétrica": [
            "Desenergização",
            "Bloqueio",
            "Verificação de ausência de tensão",
            "Aterramento temporário",
            "Infraestrutura",
            "Lançamento de cabos",
            "Conexões",
            "Testes elétricos"
        ],

        "Correia": [
            "Preparação",
            "Lançamento da lona",
            "Posicionamento",
            "Emenda",
            "Vulcanização",
            "Tensionamento",
            "Alinhamento"
        ],

        "Comissionamento": [
            "Inspeções finais",
            "Testes",
            "Verificação de integridade",
            "Retirada dos bloqueios",
            "Reenergização",
            "Liberação operacional"
        ]
    },


    /* -----------------------------------------------------
       CRONOGRAMA
    ----------------------------------------------------- */

    schedule: [

        [
            "Preparação e mobilização",
            "11/01",
            "12/01",
            "2 dias",
            "Planejado"
        ],

        [
            "Parada / bloqueio elétrico",
            "13/01",
            "13/01",
            "1 dia",
            "Planejado"
        ],

        [
            "Adequações estruturais",
            "14/01",
            "17/01",
            "4 dias",
            "Planejado"
        ],

        [
            "Montagem / interligação mecânica",
            "18/01",
            "21/01",
            "4 dias",
            "Planejado"
        ],

        [
            "Infraestrutura elétrica e cabos",
            "18/01",
            "23/01",
            "6 dias",
            "Planejado"
        ],

        [
            "Lançamento da correia e vulcanização",
            "24/01",
            "27/01",
            "4 dias",
            "Planejado"
        ],

        [
            "Inspeções, testes e comissionamento",
            "28/01",
            "29/01",
            "2 dias",
            "Planejado"
        ],

        [
            "Liberação para operação",
            "30/01",
            "30/01",
            "1 dia",
            "Planejado"
        ]
    ],


    /* -----------------------------------------------------
       GO / NO-GO
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
            name: "ART / análise de risco",
            done: true,
            critical: true
        },

        {
            name: "PTS liberada",
            done: true,
            critical: true
        },

        {
            name: "Bloqueio planejado",
            done: true,
            critical: true
        },

        {
            name: "Plano de desenergização",
            done: true,
            critical: true
        },

        {
            name: "Equipamentos de içamento",
            done: false,
            critical: true
        },

        {
            name: "Andaimes / acessos",
            done: true,
            critical: true
        },

        {
            name: "Equipe de vulcanização",
            done: false,
            critical: true
        },

        {
            name: "Instrumentos de inspeção",
            done: true,
            critical: false
        },

        {
            name: "Plano de emergência",
            done: true,
            critical: true
        }
    ],


    /* -----------------------------------------------------
       PASSO A PASSO
    ----------------------------------------------------- */

    timeline: [

        "Preparação da intervenção",

        "Mobilização",

        "Parada programada",

        "Desenergização",

        "Bloqueio / LOTO",

        "Verificação de ausência de tensão",

        "Aterramento temporário",

        "Liberação da frente",

        "Adequações estruturais",

        "Interligação estrutural",

        "Montagem mecânica",

        "Infraestrutura elétrica",

        "Lançamento de cabos",

        "Lançamento da correia",

        "Preparação da emenda",

        "Vulcanização",

        "Tensionamento / alinhamento",

        "Inspeções",

        "Testes elétricos e mecânicos",

        "Comissionamento",

        "Retirada dos aterramentos",

        "Retirada dos bloqueios",

        "Reenergização",

        "Liberação operacional"
    ],


    /* -----------------------------------------------------
       AVANÇO
    ----------------------------------------------------- */

    progress: {

        "Estrutural": 0,

        "Mecânica": 0,

        "Elétrica": 0,

        "Correia": 0,

        "Comissionamento": 0
    },


    /* -----------------------------------------------------
       EQUIPE
    ----------------------------------------------------- */

    team: [

        "Engenharia / Coordenação",

        "Supervisão",

        "Encarregado",

        "Técnico de Segurança",

        "Inspetor de Solda / Dimensional",

        "Eletricista Força e Controle",

        "Eletricista Montador",

        "Mecânico Montador / Ajustador",

        "Soldador",

        "Montador de Andaime",

        "Equipe de lançamento da correia",

        "Equipe de vulcanização",

        "Operador de Caminhão Munck",

        "Operador de Guindaste",

        "Motorista / Veículo de Apoio"
    ],


    /* -----------------------------------------------------
       EQUIPAMENTOS
    ----------------------------------------------------- */

    equipment: [

        "Caminhão Munck",

        "Guindaste",

        "Geradores",

        "Andaimes",

        "Detector de tensão",

        "Conjunto de aterramento temporário",

        "Luvas isolantes Classe 4",

        "Equipamentos de sinalização",

        "Equipamentos de isolamento",

        "Ferramentas elétricas",

        "Ferramentas manuais",

        "Equipamentos para trabalho em altura",

        "Equipamentos para movimentação de carga"
    ],


    /* -----------------------------------------------------
       RISCOS
    ----------------------------------------------------- */

    risks: [

        {
            name: "Risco Elétrico",
            control:
                "Desenergização, bloqueio, teste de ausência de tensão, aterramento e controle de acesso."
        },

        {
            name: "Trabalho em Altura",
            control:
                "Sistema de proteção contra quedas, inspeção de acesso, ancoragem e atendimento à NR-35."
        },

        {
            name: "Içamento de Cargas",
            control:
                "Planejamento do içamento, isolamento da área, inspeção dos acessórios e comunicação entre equipe e operador."
        },

        {
            name: "Interferências",
            control:
                "Inspeção prévia da área e paralisação imediata diante de interferências não previstas."
        },

        {
            name: "Equipamentos Móveis",
            control:
                "Segregação homem-máquina, sinalização, isolamento e controle de circulação."
        },

        {
            name: "Atividades Simultâneas",
            control:
                "Compatibilização das frentes, comunicação entre disciplinas e gerenciamento das interfaces."
        },

        {
            name: "Movimentação de Materiais",
            control:
                "Avaliação de peso, rota, método de movimentação e utilização de equipamentos adequados."
        },

        {
            name: "Soldagem / Trabalho a Quente",
            control:
                "Controle de fontes de ignição, isolamento, inspeção da área e recursos de combate a incêndio."
        },

        {
            name: "Condições Climáticas",
            control:
                "Monitoramento das condições ambientais e paralisação quando houver condição insegura."
        }
    ],


    /* -----------------------------------------------------
       QUALIDADE
    ----------------------------------------------------- */

    quality: [

        {
            name: "Inspeção Dimensional",
            description:
                "Verificação das dimensões e posicionamento dos elementos instalados.",
            status: "Planejado"
        },

        {
            name: "Alinhamento",
            description:
                "Verificação do alinhamento dos componentes estruturais e mecânicos.",
            status: "Planejado"
        },

        {
            name: "Nivelamento / Prumo",
            description:
                "Controle geométrico das estruturas e equipamentos instalados.",
            status: "Planejado"
        },

        {
            name: "Inspeção de Soldagem",
            description:
                "Verificação visual e documental das juntas soldadas aplicáveis.",
            status: "Planejado"
        },

        {
            name: "Torqueamento",
            description:
                "Controle das conexões aparafusadas conforme critérios aplicáveis.",
            status: "Planejado"
        },

        {
            name: "Emenda / Vulcanização",
            description:
                "Controle do processo de preparação, emenda e vulcanização da correia.",
            status: "Planejado"
        },

        {
            name: "Testes Elétricos",
            description:
                "Verificação das instalações, continuidade e condições para energização.",
            status: "Planejado"
        },

        {
            name: "Checklists",
            description:
                "Registros das inspeções e verificações realizadas durante a intervenção.",
            status: "Planejado"
        },

        {
            name: "Liberação Final",
            description:
                "Verificação consolidada das condições para retorno operacional.",
            status: "Planejado"
        }
    ],


    /* -----------------------------------------------------
       DOCUMENTOS

       Quando colocar os PDFs no GitHub, mantenha
       os nomes abaixo ou altere os caminhos.
    ----------------------------------------------------- */

    docs: [

        {
            name: "Plano de Trabalho",
            type: "PDF",
            path: "assets/docs/plano-trabalho.pdf",
            available: true
        },

        {
            name: "Manual do Tie-in",
            type: "PDF",
            path: "assets/docs/manual-tiein.pdf",
            available: true
        },

        {
            name: "Cronograma Integrado",
            type: "PDF",
            path: "assets/docs/cronograma.pdf",
            available: false
        },

        {
            name: "Desenhos de Referência",
            type: "DWG / PDF",
            path: "",
            available: false
        },

        {
            name: "Procedimento de Vulcanização",
            type: "PDF",
            path: "",
            available: false
        },

        {
            name: "ART / Análise de Risco",
            type: "PDF",
            path: "",
            available: false
        },

        {
            name: "PTS",
            type: "PDF",
            path: "",
            available: false
        },

        {
            name: "Checklists de Inspeção",
            type: "PDF / XLSX",
            path: "",
            available: false
        },

        {
            name: "RACs / Normas Aplicáveis",
            type: "PDF",
            path: "",
            available: false
        },

        {
            name: "Relatórios de Execução",
            type: "PDF",
            path: "",
            available: false
        }
    ],


    /* -----------------------------------------------------
       EVIDÊNCIAS
    ----------------------------------------------------- */

    evidence: [

        {
            kind: "antes",
            src: "assets/img/3D_01.png",
            title: "Interface TR-2091KS-03 × CT-2032KS-08"
        },

        {
            kind: "antes",
            src: "assets/img/Maps_01.png",
            title: "Localização da intervenção"
        }
    ]
};


/* =========================================================
   03. RENDER PRINCIPAL
========================================================= */

function render() {

    renderQuick();

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

    updateOverallProgress();
}


/* =========================================================
   04. NAVEGAÇÃO RÁPIDA
========================================================= */

function renderQuick() {

    const container = $("#quick");

    if (!container) return;


    container.innerHTML = data.quick
        .map(
            ([name, id]) => `
                <a href="#${id}">
                    ${name}
                </a>
            `
        )
        .join("");
}


/* =========================================================
   05. ESCOPO
========================================================= */

function renderScopes() {

    const container = $("#scopeGrid");

    if (!container) return;


    container.innerHTML =
        Object.entries(data.scopes)

            .map(([discipline, items], index) => {

                const number =
                    String(index + 1)
                        .padStart(2, "0");


                return `
                    <article class="scope-card card">

                        <span class="num">
                            ${number}
                        </span>

                        <h3>
                            ${discipline}
                        </h3>

                        <ul>

                            ${items
                                .map(
                                    item =>
                                        `<li>${item}</li>`
                                )
                                .join("")}

                        </ul>

                    </article>
                `;
            })

            .join("");
}


/* =========================================================
   06. CRONOGRAMA
========================================================= */

function renderSchedule() {

    const tbody = $("#scheduleBody");

    if (!tbody) return;


    tbody.innerHTML =
        data.schedule

            .map((item, index) => {

                const [
                    activity,
                    start,
                    finish,
                    duration,
                    status
                ] = item;


                const number =
                    String(index + 1)
                        .padStart(2, "0");


                return `
                    <tr>

                        <td>
                            ${number}
                        </td>

                        <td>
                            <b>${activity}</b>
                        </td>

                        <td>
                            ${start}
                        </td>

                        <td>
                            ${finish}
                        </td>

                        <td>
                            ${duration}
                        </td>

                        <td>
                            <span class="badge">
                                ${status}
                            </span>
                        </td>

                    </tr>
                `;
            })

            .join("");
}


/* =========================================================
   07. GO / NO-GO
========================================================= */

function renderReadiness() {

    const list = $("#readinessList");

    const pctElement = $("#readyPct");

    const gauge = $("#gauge");

    const goStatus = $("#goStatus");


    if (
        !list ||
        !pctElement ||
        !gauge ||
        !goStatus
    ) {
        return;
    }


    const total =
        data.readiness.length;


    const approved =
        data.readiness.filter(
            item => item.done
        ).length;


    const pct =
        Math.round(
            (approved / total) * 100
        );


    const criticalItems =
        data.readiness.filter(
            item => item.critical
        );


    const criticalApproved =
        criticalItems.every(
            item => item.done
        );


    pctElement.textContent =
        `${pct}%`;


    gauge.style.setProperty(
        "--pct",
        `${pct}%`
    );


    goStatus.textContent =
        criticalApproved
            ? "GO"
            : "NO-GO";


    goStatus.style.color =
        criticalApproved
            ? "var(--success)"
            : "var(--danger)";


    list.innerHTML =
        data.readiness

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


                        <b class="${
                            item.done
                                ? "ok"
                                : "warn"
                        }">

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


/* =========================================================
   08. PASSO A PASSO
========================================================= */

function renderTimeline() {

    const container = $("#timeline");

    if (!container) return;


    container.innerHTML =
        data.timeline

            .map((step, index) => {

                const number =
                    String(index + 1)
                        .padStart(2, "0");


                return `
                    <div class="step">

                        <i></i>

                        <b>
                            ${number}
                        </b>

                        <span>
                            ${step}
                        </span>

                    </div>
                `;
            })

            .join("");
}


/* =========================================================
   09. AVANÇO
========================================================= */

function calculateOverallProgress() {

    const values =
        Object.values(data.progress);


    if (!values.length) {
        return 0;
    }


    const total =
        values.reduce(
            (sum, value) =>
                sum + value,
            0
        );


    return Math.round(
        total / values.length
    );
}


function updateOverallProgress() {

    const donut =
        $("#overallDonut");


    if (!donut) return;


    const overall =
        calculateOverallProgress();


    donut.style.setProperty(
        "--pct",
        `${overall}%`
    );


    const value =
        $("b", donut);


    if (value) {

        value.textContent =
            `${overall}%`;
    }
}


function renderProgress() {

    const container =
        $("#progressBars");


    if (!container) return;


    container.innerHTML =
        Object.entries(data.progress)

            .map(([name, value]) => {

                return `
                    <div class="bar">

                        <div class="bar-head">

                            <b>
                                ${name}
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


/* =========================================================
   10. EQUIPE
========================================================= */

function renderTeam() {

    const container =
        $("#team");


    if (!container) return;


    container.innerHTML =
        data.team

            .map(
                item => `
                    <div class="list-item">
                        ${item}
                    </div>
                `
            )

            .join("");
}


/* =========================================================
   11. EQUIPAMENTOS
========================================================= */

function renderEquipment() {

    const container =
        $("#equipment");


    if (!container) return;


    container.innerHTML =
        data.equipment

            .map(
                item => `
                    <div class="list-item">
                        ${item}
                    </div>
                `
            )

            .join("");
}


/* =========================================================
   12. RISCOS
========================================================= */

function renderRisks() {

    const container =
        $("#risks");


    if (!container) return;


    container.innerHTML =
        data.risks

            .map(
                risk => `
                    <article class="risk-card card">

                        <h3>
                            ${risk.name}
                        </h3>

                        <p>
                            ${risk.control}
                        </p>

                    </article>
                `
            )

            .join("");
}


/* =========================================================
   13. QUALIDADE
========================================================= */

function renderQuality() {

    const container =
        $("#quality");


    if (!container) return;


    container.innerHTML =
        data.quality

            .map(
                item => `
                    <article class="quality-card card">

                        <h3>
                            ${item.name}
                        </h3>

                        <p>
                            ${item.description}
                        </p>

                        <span class="qstatus">
                            ${item.status}
                        </span>

                    </article>
                `
            )

            .join("");
}


/* =========================================================
   14. DOCUMENTOS
========================================================= */

function renderDocuments() {

    const container =
        $("#docs");


    if (!container) return;


    container.innerHTML =
        data.docs

            .map(doc => {

                const status =
                    doc.available
                        ? "Disponível"
                        : "Pendente";


                const button =
                    doc.available
                        ? "Abrir"
                        : "Indisponível";


                return `
                    <div class="doc-row">

                        <div class="doc-icon">
                            ▤
                        </div>


                        <b>
                            ${doc.name}
                        </b>


                        <span>
                            ${doc.type}
                        </span>


                        <span>
                            ${status}
                        </span>


                        <button
                            type="button"
                            data-doc="${doc.path}"
                            data-available="${doc.available}"
                        >
                            ${button}
                        </button>

                    </div>
                `;
            })

            .join("");
}


/* =========================================================
   15. EVIDÊNCIAS
========================================================= */

function renderEvidence() {

    const container =
        $("#evidence");


    if (!container) return;


    container.innerHTML =
        data.evidence

            .map(item => {

                return `
                    <article
                        class="evidence-card project-image"
                        data-kind="${item.kind}"
                        data-src="${item.src}"
                    >

                        <div class="placeholder">

                            <b>
                                IMAGEM DO PROJETO
                            </b>

                            <small>
                                ${item.src}
                            </small>

                        </div>


                        <div class="evidence-meta">

                            <small>
                                ${item.kind.toUpperCase()}
                            </small>

                            <b>
                                ${item.title}
                            </b>

                        </div>

                    </article>
                `;
            })

            .join("");
}


/* =========================================================
   16. CARREGAMENTO DE IMAGENS
========================================================= */

function hydrateImages() {

    $$(".project-image")
        .forEach(element => {

            const src =
                element.dataset.src;


            if (!src) return;


            const image =
                new Image();


            image.onload = () => {

                element.style.backgroundImage =
                    `url("${src}")`;


                const placeholder =
                    $(".placeholder", element);


                if (placeholder) {

                    placeholder.style.display =
                        "none";
                }
            };


            image.onerror = () => {

                const placeholder =
                    $(".placeholder", element);


                if (placeholder) {

                    placeholder.style.display =
                        "flex";
                }
            };


            image.src = src;
        });
}


/* =========================================================
   17. MENU MOBILE
========================================================= */

const hamburger =
    $("#hamb");


const nav =
    $("#nav");


if (hamburger && nav) {

    hamburger.addEventListener(
        "click",
        () => {

            nav.classList.toggle(
                "open"
            );
        }
    );


    $$("#nav a")
        .forEach(link => {

            link.addEventListener(
                "click",
                () => {

                    nav.classList.remove(
                        "open"
                    );
                }
            );
        });
}


/* =========================================================
   18. MAPA / 3D
========================================================= */

function changeMapImage(button) {

    const view =
        $("#mapView");


    if (!view) return;


    const src =
        button.dataset.map;


    if (!src) return;


    $$(".map-toolbar button")
        .forEach(item => {

            item.classList.remove(
                "active"
            );
        });


    button.classList.add(
        "active"
    );


    view.dataset.src =
        src;


    view.style.backgroundImage =
        "none";


    const placeholder =
        $(".placeholder", view);


    if (placeholder) {

        placeholder.style.display =
            "flex";


        const small =
            $("small", placeholder);


        if (small) {

            small.textContent =
                src;
        }
    }


    const image =
        new Image();


    image.onload = () => {

        view.style.backgroundImage =
            `url("${src}")`;


        if (placeholder) {

            placeholder.style.display =
                "none";
        }
    };


    image.onerror = () => {

        if (placeholder) {

            placeholder.style.display =
                "flex";
        }


        toast(
            "Imagem ainda não adicionada ao projeto."
        );
    };


    image.src =
        src;
}


$$(".map-toolbar button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                changeMapImage(
                    button
                );
            }
        );
    });


/* =========================================================
   19. MODAL
========================================================= */

const modal =
    $("#modal");


const modalContent =
    $("#modalContent");


const modalClose =
    $("#modalClose");


function openModal(html) {

    if (
        !modal ||
        !modalContent
    ) {
        return;
    }


    modalContent.innerHTML =
        html;


    modal.classList.add(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "false"
    );


    document.body.style.overflow =
        "hidden";
}


function closeModal() {

    if (!modal) return;


    modal.classList.remove(
        "open"
    );


    modal.setAttribute(
        "aria-hidden",
        "true"
    );


    document.body.style.overflow =
        "";
}


if (modalClose) {

    modalClose.addEventListener(
        "click",
        closeModal
    );
}


if (modal) {

    modal.addEventListener(
        "click",
        event => {

            if (
                event.target === modal
            ) {

                closeModal();
            }
        }
    );
}


document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape"
        ) {

            closeModal();
        }
    }
);


/* =========================================================
   20. AMPLIAR IMAGEM 3D / MAPA
========================================================= */

const expandButton =
    $("#expand");


if (expandButton) {

    expandButton.addEventListener(
        "click",
        () => {

            const view =
                $("#mapView");


            if (!view) return;


            const src =
                view.dataset.src;


            if (!src) {

                toast(
                    "Nenhuma imagem selecionada."
                );

                return;
            }


            openModal(`

                <img
                    src="${src}"
                    alt="Visualização ampliada do Tie-in"
                    class="modal-project-image"
                >

            `);
        }
    );
}


/* =========================================================
   21. DOCUMENTOS
========================================================= */

const docsContainer =
    $("#docs");


if (docsContainer) {

    docsContainer.addEventListener(
        "click",
        event => {

            const button =
                event.target.closest(
                    "button"
                );


            if (!button) return;


            const available =
                button.dataset.available ===
                "true";


            const path =
                button.dataset.doc;


            if (
                available &&
                path
            ) {

                window.open(
                    path,
                    "_blank",
                    "noopener,noreferrer"
                );

                return;
            }


            toast(
                "Documento ainda não disponibilizado."
            );
        }
    );
}


/* =========================================================
   22. FILTROS DAS EVIDÊNCIAS
========================================================= */

$$(".filters button")
    .forEach(button => {

        button.addEventListener(
            "click",
            () => {

                $$(".filters button")
                    .forEach(item => {

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

                        const kind =
                            card.dataset.kind;


                        const show =
                            filter === "all" ||
                            kind === filter;


                        card.style.display =
                            show
                                ? "block"
                                : "none";
                    });
            }
        );
    });


/* =========================================================
   23. REGISTRAR
========================================================= */

const registerButton =
    $("#register");


if (registerButton) {

    registerButton.addEventListener(
        "click",
        () => {

            openModal(`

                <div
                    style="
                        padding:40px 15px;
                        max-width:600px;
                        margin:auto;
                    "
                >

                    <span
                        style="
                            font-size:9px;
                            font-weight:800;
                            letter-spacing:.1em;
                            color:#1478b4;
                        "
                    >
                        ACOMPANHAMENTO
                    </span>


                    <h2
                        style="
                            margin:8px 0 12px;
                            color:#062238;
                        "
                    >
                        Registrar Atualização
                    </h2>


                    <p
                        style="
                            color:#6f7f8c;
                            line-height:1.7;
                        "
                    >

                        Este botão poderá evoluir
                        para um formulário de campo
                        destinado ao registro de avanço,
                        evidências fotográficas,
                        ocorrências, inspeções e
                        liberações do Tie-in.

                    </p>


                    <p
                        style="
                            margin-top:20px;
                            font-size:11px;
                            color:#435361;
                        "
                    >

                        Nesta versão inicial,
                        o portal permanece somente
                        para consulta e acompanhamento.

                    </p>

                </div>

            `);
        }
    );
}


/* =========================================================
   24. TOAST
========================================================= */

let toastTimer;


function toast(message) {

    const element =
        $("#toast");


    if (!element) return;


    clearTimeout(
        toastTimer
    );


    element.textContent =
        message;


    element.classList.add(
        "show"
    );


    toastTimer =
        setTimeout(
            () => {

                element.classList.remove(
                    "show"
                );

            },
            2800
        );
}


/* =========================================================
   25. BOTÃO VOLTAR AO TOPO
========================================================= */

const topButton =
    $("#topBtn");


function updateTopButton() {

    if (!topButton) return;


    topButton.classList.toggle(
        "show",
        window.scrollY > 500
    );
}


window.addEventListener(
    "scroll",
    updateTopButton,
    {
        passive: true
    }
);


if (topButton) {

    topButton.addEventListener(
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
   26. BUSCA
========================================================= */

const searchButton =
    $("#searchBtn");


if (searchButton) {

    searchButton.addEventListener(
        "click",
        () => {

            openSearch();
        }
    );
}


function openSearch() {

    openModal(`

        <div
            style="
                padding:30px 10px;
                max-width:720px;
                margin:auto;
            "
        >

            <span
                style="
                    color:#1478b4;
                    font-size:9px;
                    font-weight:800;
                    letter-spacing:.1em;
                "
            >
                TIE-IN DIGITAL
            </span>


            <h2
                style="
                    color:#062238;
                    margin:7px 0 18px;
                "
            >
                Buscar no Plano
            </h2>


            <input
                id="portalSearch"
                type="search"
                placeholder="Ex.: vulcanização, LOTO, guindaste, qualidade..."
                autocomplete="off"

                style="
                    width:100%;
                    height:48px;
                    padding:0 15px;
                    border:1px solid #dfe6eb;
                    border-radius:8px;
                    outline:none;
                "
            >


            <div
                id="searchResults"
                style="
                    margin-top:16px;
                "
            ></div>

        </div>

    `);


    const input =
        $("#portalSearch");


    if (!input) return;


    setTimeout(
        () => input.focus(),
        100
    );


    input.addEventListener(
        "input",
        () => {

            performSearch(
                input.value
            );
        }
    );
}


/* =========================================================
   27. ÍNDICE DE BUSCA
========================================================= */

function buildSearchIndex() {

    const results = [];


    data.quick.forEach(
        ([name, id]) => {

            results.push({
                title: name,
                category: "Seção",
                target: id
            });
        }
    );


    Object.entries(
        data.scopes
    ).forEach(
        ([discipline, items]) => {

            results.push({
                title: discipline,
                category: "Escopo",
                target: "escopo"
            });


            items.forEach(item => {

                results.push({
                    title: item,
                    category: discipline,
                    target: "escopo"
                });
            });
        }
    );


    data.timeline.forEach(
        item => {

            results.push({
                title: item,
                category:
                    "Sequência Executiva",
                target: "execucao"
            });
        }
    );


    data.team.forEach(
        item => {

            results.push({
                title: item,
                category: "Equipe",
                target: "equipe"
            });
        }
    );


    data.equipment.forEach(
        item => {

            results.push({
                title: item,
                category: "Equipamentos",
                target: "equipamentos"
            });
        }
    );


    data.risks.forEach(
        item => {

            results.push({
                title: item.name,
                category: "Segurança",
                target: "seguranca"
            });
        }
    );


    data.quality.forEach(
        item => {

            results.push({
                title: item.name,
                category: "Qualidade",
                target: "qualidade"
            });
        }
    );


    data.docs.forEach(
        item => {

            results.push({
                title: item.name,
                category: "Documentos",
                target: "documentos"
            });
        }
    );


    return results;
}


const searchIndex =
    buildSearchIndex();


function normalizeText(text) {

    return text

        .normalize("NFD")

        .replace(
            /[\u0300-\u036f]/g,
            ""
        )

        .toLowerCase();
}


/* =========================================================
   28. EXECUÇÃO DA BUSCA
========================================================= */

function performSearch(query) {

    const container =
        $("#searchResults");


    if (!container) return;


    const normalized =
        normalizeText(
            query.trim()
        );


    if (
        normalized.length < 2
    ) {

        container.innerHTML = `

            <p
                style="
                    color:#7a8994;
                    font-size:11px;
                "
            >
                Digite pelo menos 2 caracteres.
            </p>

        `;

        return;
    }


    const matches =
        searchIndex

            .filter(item => {

                return normalizeText(
                    `${item.title} ${item.category}`
                )
                    .includes(
                        normalized
                    );
            })

            .slice(
                0,
                12
            );


    if (!matches.length) {

        container.innerHTML = `

            <p
                style="
                    color:#7a8994;
                    font-size:11px;
                "
            >
                Nenhum resultado encontrado.
            </p>

        `;

        return;
    }


    container.innerHTML =
        matches

            .map(
                item => `

                    <button
                        type="button"
                        data-search-target="${item.target}"

                        style="
                            width:100%;
                            display:block;
                            padding:12px 4px;
                            border:0;
                            border-bottom:1px solid #edf1f4;
                            background:transparent;
                            text-align:left;
                            cursor:pointer;
                        "
                    >

                        <small
                            style="
                                display:block;
                                color:#1478b4;
                                font-size:8px;
                                font-weight:800;
                                letter-spacing:.08em;
                                text-transform:uppercase;
                            "
                        >
                            ${item.category}
                        </small>


                        <b
                            style="
                                display:block;
                                margin-top:3px;
                                color:#17222c;
                                font-size:12px;
                            "
                        >
                            ${item.title}
                        </b>

                    </button>

                `
            )

            .join("");


    $$(
        "[data-search-target]",
        container
    )
        .forEach(button => {

            button.addEventListener(
                "click",
                () => {

                    const target =
                        button.dataset
                            .searchTarget;


                    closeModal();


                    setTimeout(
                        () => {

                            document
                                .getElementById(
                                    target
                                )
                                ?.scrollIntoView({
                                    behavior:
                                        "smooth"
                                });

                        },
                        150
                    );
                }
            );
        });
}


/* =========================================================
   29. DESTACAR SEÇÃO ATIVA
========================================================= */

const sectionIds = [

    "visao",

    "escopo",

    "mapa",

    "execucao",

    "recursos",

    "seguranca",

    "qualidade",

    "documentos",

    "acompanhamento"
];


const observedSections =
    sectionIds

        .map(
            id =>
                document.getElementById(id)
        )

        .filter(Boolean);


if (
    "IntersectionObserver" in window
) {

    const observer =
        new IntersectionObserver(

            entries => {

                entries.forEach(
                    entry => {

                        if (
                            !entry.isIntersecting
                        ) {
                            return;
                        }


                        const id =
                            entry.target.id;


                        $$("#nav a")
                            .forEach(link => {

                                link.classList.remove(
                                    "active"
                                );


                                const href =
                                    link.getAttribute(
                                        "href"
                                    );


                                if (
                                    href ===
                                    `#${id}`
                                ) {

                                    link.classList.add(
                                        "active"
                                    );
                                }
                            });
                    }
                );
            },

            {
                rootMargin:
                    "-30% 0px -60% 0px",

                threshold: 0
            }
        );


    observedSections
        .forEach(section => {

            observer.observe(
                section
            );
        });
}


/* =========================================================
   30. CLIQUE NAS EVIDÊNCIAS
========================================================= */

document.addEventListener(
    "click",
    event => {

        const card =
            event.target.closest(
                ".evidence-card"
            );


        if (!card) return;


        const src =
            card.dataset.src;


        if (!src) return;


        openModal(`

            <img
                src="${src}"
                alt="Evidência fotográfica"
                class="modal-project-image"
            >

        `);
    }
);


/* =========================================================
   31. INICIALIZAÇÃO
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    () => {

        render();

        updateTopButton();

    }
);
