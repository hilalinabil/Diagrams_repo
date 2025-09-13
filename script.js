// Initialize Mermaid
mermaid.initialize({
    startOnLoad: true,
    theme: 'dark',
    themeVariables: {
        primaryColor: '#6366f1',
        primaryTextColor: '#f8fafc',
        primaryBorderColor: '#334155',
        lineColor: '#6366f1',
        secondaryColor: '#1e293b',
        tertiaryColor: '#334155',
        background: '#0f172a',
        mainBkg: '#1e293b',
        secondBkg: '#334155',
        tertiaryBkg: '#475569'
    },
    flowchart: {
        useMaxWidth: true,
        htmlLabels: true
    },
    sequence: {
        useMaxWidth: true,
        htmlLabels: true
    },
    class: {
        useMaxWidth: true,
        htmlLabels: true
    },
    state: {
        useMaxWidth: true,
        htmlLabels: true
    },
    er: {
        useMaxWidth: true,
        htmlLabels: true
    }
});

// Diagram definitions
const diagrams = {
    class: `classDiagram
    class MainWindow {
        -QTabWidget tabs
        -QLearningOptimizer optimizer
        -DatabaseInterface db
        +optimize_route()
        +update_ui()
        +handle_errors()
    }
    
    class QLearningOptimizer {
        -dict q_table
        -float learning_rate
        -float epsilon
        -dict priority_weights
        +optimize_route()
        +update_q_value()
        +get_state_key()
        +calculate_reward()
    }
    
    class DatabaseFactory {
        +create_database(db_type: str) DatabaseInterface
    }
    
    class DatabaseInterface {
        <<abstract>>
        +connect() bool
        +create_tables() bool
        +insert_product(product_data) bool
        +get_product(product_id) Product
        +get_all_products() List[Product]
        +disconnect() bool
    }
    
    class SQLiteDatabase {
        -str path
        +connect() bool
        +create_tables() bool
        +insert_product(product_data) bool
        +get_product(product_id) Product
        +get_all_products() List[Product]
        +disconnect() bool
    }
    
    class MongoDBDatabase {
        -str host
        -int port
        -str database
        +connect() bool
        +create_tables() bool
        +insert_product(product_data) bool
        +get_product(product_id) Product
        +get_all_products() List[Product]
        +disconnect() bool
    }
    
    class OptimizationWorker {
        -QLearningOptimizer optimizer
        -list products
        -str start_zone
        -str algorithm
        -float timeout
        +finished pyqtSignal
        +progress pyqtSignal
        +run()
    }
    
    MainWindow --> QLearningOptimizer : uses
    MainWindow --> DatabaseFactory : creates
    MainWindow --> OptimizationWorker : creates
    DatabaseFactory --> DatabaseInterface : creates
    DatabaseInterface <|-- SQLiteDatabase : implements
    DatabaseInterface <|-- MongoDBDatabase : implements
    QLearningOptimizer --> DatabaseInterface : uses
    OptimizationWorker --> QLearningOptimizer : uses`,

    sequence: `sequenceDiagram
    participant User
    participant GUI as MainWindow
    participant Optimizer as QLearningOptimizer
    participant Database as DatabaseInterface
    participant Worker as OptimizationWorker
    
    User->>GUI: 1. Request Optimization
    GUI->>Database: 2. Get Products
    Database-->>GUI: 3. Return Products
    GUI->>Worker: 4. Start Optimization
    Worker->>Optimizer: 5. Load Q-Table
    Optimizer->>Database: 6. Load Q-Table
    Database-->>Optimizer: 7. Return Q-Table
    Optimizer->>Optimizer: 8. Calculate Route
    Optimizer->>Database: 9. Save Q-Table
    Database-->>Optimizer: 10. Confirm Save
    Optimizer-->>Worker: 11. Return Route
    Worker-->>GUI: 12. Optimization Complete
    GUI-->>User: 13. Display Results
    
    Note over Worker,Optimizer: Background Processing
    Note over Database: Data Persistence`,

    usecase: `graph TB
    subgraph "Warehouse Management System"
        UC1[Optimize Picking Routes]
        UC2[Manage Products]
        UC3[Process Orders]
        UC4[Execute Picking]
        UC5[Track Shipments]
        UC6[Generate Reports]
        UC7[Configure System]
        UC8[Backup Data]
        UC9[Monitor Performance]
    end
    
    subgraph "Actors"
        WM[Warehouse Manager]
        WO[Warehouse Operator]
        SA[System Administrator]
    end
    
    WM --> UC1
    WM --> UC2
    WM --> UC3
    WM --> UC6
    
    WO --> UC4
    WO --> UC5
    
    SA --> UC7
    SA --> UC8
    SA --> UC9
    
    UC1 -.->|includes| UC2
    UC4 -.->|includes| UC1`,

    component: `graph TB
    subgraph "GUI Component"
        MW[MainWindow]
        TW[TabWidget]
        UI[User Interface]
    end
    
    subgraph "Business Logic"
        QL[Q-Learning Engine]
        GR[Greedy Algorithm]
        HY[Hybrid Optimizer]
    end
    
    subgraph "Data Access Layer"
        DF[Database Factory]
        DI[Database Interface]
    end
    
    subgraph "Storage Layer"
        SQL[SQLite Database]
        MONGO[MongoDB]
        MYSQL[MySQL]
        PG[PostgreSQL]
    end
    
    subgraph "External Dependencies"
        PQ[PyQt5]
        PD[Pandas]
        NP[NumPy]
    end
    
    MW --> QL
    MW --> DF
    TW --> DF
    UI --> MW
    
    QL --> DI
    GR --> DI
    HY --> QL
    HY --> GR
    
    DF --> SQL
    DF --> MONGO
    DF --> MYSQL
    DF --> PG
    
    DI --> SQL
    DI --> MONGO
    DI --> MYSQL
    DI --> PG
    
    MW -.->|uses| PQ
    QL -.->|uses| NP
    DF -.->|uses| PD`,

    activity: `flowchart TD
    Start([Start]) --> Input[Input Products and Zones]
    Input --> Init[Initialize Q-Learning]
    Init --> Optimize[Optimize Route]
    
    Optimize --> Check{Convergence<br/>Reached?}
    Check -->|No| Timeout{Timeout<br/>Reached?}
    Timeout -->|No| Explore[Explore Actions]
    Timeout -->|Yes| Greedy[Use Greedy Fallback]
    
    Explore --> Exploit[Exploit Knowledge]
    Exploit --> Update[Update Q-Values]
    Update --> Check
    
    Check -->|Yes| End([End])
    Greedy --> End
    
    subgraph "Parallel Processes"
        Explore
        Exploit
        Update
    end
    
    subgraph "Decision Points"
        Check
        Timeout
    end`,

    state: `stateDiagram-v2
    [*] --> Initializing : Start Optimization
    
    Initializing --> Learning : Initialize Q-Table
    Learning --> Exploring : ε-greedy Action
    Learning --> Exploiting : Best Known Action
    
    Exploring --> Calculating : Random Action
    Exploiting --> Calculating : Best Action
    
    Calculating --> Updating : Calculate Reward
    Updating --> Checking : Update Q-Values
    
    Checking --> Learning : Continue Learning
    Checking --> Converged : Convergence Reached
    Checking --> Timeout : Max Iterations
    
    Converged --> Optimized : Return Best Route
    Timeout --> Fallback : Use Greedy Algorithm
    Fallback --> Optimized : Return Greedy Route
    
    Optimized --> [*] : End
    
    note right of Learning
        State includes:
        - Current zone
        - Remaining products
        - Priority distribution
    end note
    
    note right of Calculating
        Reward function:
        - Priority reward
        - Quantity reward
        - Distance penalty
    end note`,

    er: `erDiagram
    PRODUCTS {
        string id PK
        string name
        string zone
        string location
        int quantity
        string priority
        float price
        timestamp created_at
        timestamp updated_at
    }
    
    ORDERS {
        string id PK
        string customer_name
        string status
        string priority
        float total_amount
        timestamp created_at
        timestamp updated_at
    }
    
    ORDER_ITEMS {
        string order_id FK
        string product_id FK
        int quantity
        float unit_price
    }
    
    SHIPMENTS {
        string id PK
        string order_id FK
        string product_id FK
        int quantity
        string status
        timestamp shipped_at
        timestamp delivered_at
    }
    
    TRANSACTIONS {
        string id PK
        string type
        float amount
        string description
        timestamp created_at
    }
    
    WAREHOUSE_ZONES {
        string zone_id PK
        string zone_name
        string description
        int capacity
        string status
    }
    
    PRODUCTS ||--o{ ORDER_ITEMS : "contains"
    ORDERS ||--o{ ORDER_ITEMS : "has"
    ORDERS ||--o{ SHIPMENTS : "generates"
    PRODUCTS ||--o{ SHIPMENTS : "shipped"
    PRODUCTS }o--|| WAREHOUSE_ZONES : "stored_in"`
};

// DOM Content Loaded
document.addEventListener('DOMContentLoaded', function() {
    initializeNavigation();
    initializeDiagrams();
    initializeScrollEffects();
    initializeAnimations();
});

// Navigation functionality
function initializeNavigation() {
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Mobile menu toggle
    navToggle.addEventListener('click', function() {
        navMenu.classList.toggle('active');
        navToggle.classList.toggle('active');
    });

    // Close mobile menu when clicking on links
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            navMenu.classList.remove('active');
            navToggle.classList.remove('active');
        });
    });

    // Smooth scrolling for navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });
}

// Initialize all diagrams
function initializeDiagrams() {
    Object.keys(diagrams).forEach(diagramType => {
        const diagramElement = document.getElementById(`${diagramType}-diagram`);
        if (diagramElement) {
            renderDiagram(diagramType, diagramElement);
        }
    });
}

// Render individual diagram
function renderDiagram(diagramType, element) {
    const diagramDefinition = diagrams[diagramType];
    
    try {
        mermaid.render(`mermaid-${diagramType}`, diagramDefinition).then(({ svg }) => {
            element.innerHTML = svg;
            
            // Add custom styling to the rendered diagram
            const svgElement = element.querySelector('svg');
            if (svgElement) {
                svgElement.style.maxWidth = '100%';
                svgElement.style.height = 'auto';
            }
        });
    } catch (error) {
        console.error(`Error rendering ${diagramType} diagram:`, error);
        element.innerHTML = `<div class="error-message">Error loading diagram</div>`;
    }
}

// Scroll effects
function initializeScrollEffects() {
    const navbar = document.querySelector('.navbar');
    const ctaButton = document.querySelector('.cta-button');

    // Navbar background on scroll
    window.addEventListener('scroll', function() {
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(15, 23, 42, 0.98)';
        } else {
            navbar.style.background = 'rgba(15, 23, 42, 0.95)';
        }
    });

    // CTA button scroll to diagrams
    if (ctaButton) {
        ctaButton.addEventListener('click', function(e) {
            e.preventDefault();
            const diagramsSection = document.getElementById('diagrams');
            if (diagramsSection) {
                diagramsSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }
}

// Initialize animations
function initializeAnimations() {
    // Intersection Observer for fade-in animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observe diagram cards
    const diagramCards = document.querySelectorAll('.diagram-card');
    diagramCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(30px)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(card);
    });
}

// Fullscreen functionality
function toggleFullscreen(diagramType) {
    const modal = document.getElementById('fullscreen-modal');
    const fullscreenDiagram = document.getElementById('fullscreen-diagram');
    
    if (modal && fullscreenDiagram) {
        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Render the diagram in fullscreen
        const diagramDefinition = diagrams[diagramType];
        mermaid.render(`mermaid-fullscreen-${diagramType}`, diagramDefinition).then(({ svg }) => {
            fullscreenDiagram.innerHTML = svg;
            
            // Add custom styling
            const svgElement = fullscreenDiagram.querySelector('svg');
            if (svgElement) {
                svgElement.style.width = '100%';
                svgElement.style.height = '100%';
                svgElement.style.maxWidth = 'none';
            }
        });
    }
}

function closeFullscreen() {
    const modal = document.getElementById('fullscreen-modal');
    if (modal) {
        modal.classList.remove('active');
        document.body.style.overflow = 'auto';
    }
}

// Close fullscreen on escape key
document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
        closeFullscreen();
    }
});

// Close fullscreen when clicking outside the diagram
document.getElementById('fullscreen-modal').addEventListener('click', function(e) {
    if (e.target === this) {
        closeFullscreen();
    }
});

// Utility function for smooth scrolling
function smoothScrollTo(element) {
    element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
    });
}

// Add loading states
function showLoadingState(element) {
    element.innerHTML = `
        <div class="loading-container">
            <div class="loading-spinner"></div>
            <p>Loading diagram...</p>
        </div>
    `;
}

// Error handling
function showErrorState(element, message = 'Error loading diagram') {
    element.innerHTML = `
        <div class="error-container">
            <i class="fas fa-exclamation-triangle"></i>
            <p>${message}</p>
        </div>
    `;
}

// Add CSS for loading and error states
const style = document.createElement('style');
style.textContent = `
    .loading-container, .error-container {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 200px;
        color: var(--text-muted);
    }
    
    .loading-spinner {
        width: 40px;
        height: 40px;
        border: 3px solid var(--border-color);
        border-top: 3px solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
        margin-bottom: 1rem;
    }
    
    @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
    }
    
    .error-container i {
        font-size: 2rem;
        color: var(--error-color);
        margin-bottom: 1rem;
    }
`;
document.head.appendChild(style);
