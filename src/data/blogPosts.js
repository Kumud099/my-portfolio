import { researchPaperCertificate } from "../assets/index";

const PAPER_URL = "https://www.nepjol.info/index.php/kjse/article/view/78360";
const PROJECT_GITHUB =
  "https://github.com/kumud099/electricity-consumption-analysis";

export const blogPosts = [
  {
    id: 1,
    slug: "electricity-consumption-analysis-research",
    date: "07 MAY 2025",
    readTime: "12 MIN READ",
    title:
      "From Data to Insights: Building an Electricity Consumption Prediction System",
    excerpt:
      "Learn how our team developed and evaluated machine learning models to predict electricity consumption. This post shares the project's workflow, technical challenges, and the experience of contributing to a published research paper.",
    tags: ["Machine Learning", "Research", "XGBoost"],
    doi: PAPER_URL,
    certificate: researchPaperCertificate,
    github: PROJECT_GITHUB,
    content: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "p",
            text: "Electricity consumption forecasting is essential for efficient energy management. Accurate predictions help improve power distribution, reduce waste, and support better planning. As part of a collaborative research project, our team developed a machine learning-based approach to analyze historical electricity consumption data and predict future demand. This work was later published in the *Kathmandu Journal of Science and Engineering (KJSE)*.",
          },
        ],
      },
      {
        heading: "Why This Project?",
        blocks: [
          {
            type: "p",
            text: "Electricity demand varies due to factors such as weather, seasonal changes, and human activities. Traditional forecasting methods often struggle to capture these complex patterns. Our goal was to explore whether machine learning models could provide more accurate and reliable predictions using historical data.",
          },
        ],
      },
      {
        heading: "Technologies Used",
        blocks: [
          {
            type: "p",
            text: "The project was developed using:",
          },
          {
            type: "ul",
            items: [
              "**Python**",
              "**Pandas & NumPy** for data processing",
              "**Matplotlib** for visualization",
              "**Scikit-learn** and **XGBoost** for machine learning",
              "**Jupyter Notebook** for experimentation",
            ],
          },
          {
            type: "p",
            text: "These tools enabled us to preprocess data, train multiple models, and evaluate their performance efficiently.",
          },
        ],
      },
      {
        heading: "Project Workflow",
        blocks: [
          {
            type: "p",
            text: "Our research followed a structured machine learning workflow:",
          },
          {
            type: "ol",
            items: [
              "**Data Collection** – Gathered historical electricity consumption data.",
              "**Data Preprocessing** – Cleaned the dataset, handled missing values, and prepared features.",
              "**Exploratory Data Analysis** – Visualized trends and identified patterns within the data.",
              "**Model Training** – Trained and compared several machine learning algorithms, including Linear Regression, Decision Tree, Random Forest, and XGBoost.",
              "**Evaluation** – Measured prediction accuracy using standard regression metrics to identify the best-performing model.",
            ],
          },
        ],
      },
      {
        heading: "My Contribution",
        blocks: [
          {
            type: "p",
            text: "As a co-author of this research, I contributed to several technical aspects of the project, including:",
          },
          {
            type: "ul",
            items: [
              "Data preprocessing and preparation",
              "Machine learning model implementation",
              "Running experiments and evaluating results",
              "Data visualization and analysis",
              "Supporting the research documentation",
            ],
          },
          {
            type: "p",
            text: "Working as part of a research team also strengthened my collaboration and technical communication skills.",
          },
        ],
      },
      {
        heading: "Challenges",
        blocks: [
          {
            type: "p",
            text: "One of the biggest challenges was preparing the dataset. Missing values, inconsistent records, and feature selection required careful attention before model training could begin. We also compared multiple algorithms to understand their strengths and limitations rather than relying on a single approach.",
          },
        ],
      },
      {
        heading: "Key Findings",
        blocks: [
          {
            type: "p",
            text: "Our experiments showed that different machine learning models produced varying levels of prediction accuracy. Among the evaluated models, **XGBoost** achieved the best overall performance for our dataset, highlighting the value of comparing multiple algorithms before selecting a final solution.",
          },
        ],
      },
      {
        heading: "What I Learned",
        blocks: [
          {
            type: "p",
            text: "This project reinforced several important lessons:",
          },
          {
            type: "ul",
            items: [
              "High-quality data is critical for reliable predictions.",
              "Data preprocessing is often the most time-consuming stage of a machine learning project.",
              "Comparing multiple models leads to better decision-making.",
              "Teamwork and clear technical communication are essential in collaborative research.",
            ],
          },
          {
            type: "p",
            text: "Beyond machine learning, this experience strengthened my problem-solving skills and showed me how data analysis and software engineering can work together to solve real-world challenges.",
          },
        ],
      },
      {
        heading: "Final Thoughts",
        blocks: [
          {
            type: "p",
            text: "Publishing this research paper was an important milestone in my academic journey. More importantly, the project provided hands-on experience with the complete machine learning workflow—from data preparation and model development to evaluation and documentation. It remains one of the experiences that deepened my interest in applying technology to practical engineering problems.",
          },
        ],
      },
      {
        heading: "Publication",
        blocks: [
          {
            type: "p",
            text: "**Electricity Consumption Analysis and Prediction Using Machine Learning**",
          },
          {
            type: "p",
            text: "Published in the **Kathmandu Journal of Science and Engineering (KJSE)**",
          },
          {
            type: "resources",
            label: "Resources",
            items: [
              {
                label: "Read the Published Paper",
                href: PAPER_URL,
                kind: "paper",
              },
              {
                label: "View the Project Source Code",
                href: PROJECT_GITHUB,
                kind: "code",
              },
              {
                label: "View Certificate",
                href: researchPaperCertificate,
                kind: "certificate",
              },
            ],
          },
        ],
      },
    ],
  },
  {
    id: 2,
    slug: "consectetur-adipiscing-elit",
    date: "12 SEP 2023",
    readTime: "8 MIN READ",
    title: "Consectetur Adipiscing Elit",
    excerpt:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    tags: ["Dolor", "Sit"],
    content: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "p",
            text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
          },
        ],
      },
      {
        heading: "Key takeaways",
        blocks: [
          {
            type: "p",
            text: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium.",
          },
        ],
      },
    ],
  },
  {
    id: 3,
    slug: "sed-do-eiusmod-tempor",
    date: "28 AUG 2023",
    readTime: "15 MIN READ",
    title: "Sed Do Eiusmod Tempor",
    excerpt:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    tags: ["Amet", "Elit"],
    content: [
      {
        heading: "Introduction",
        blocks: [
          {
            type: "p",
            text: "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
          },
        ],
      },
      {
        heading: "Notes",
        blocks: [
          {
            type: "p",
            text: "Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt.",
          },
        ],
      },
    ],
  },
];

export function getPostBySlug(slug) {
  return blogPosts.find((post) => post.slug === slug);
}
