import './globals.css'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Ideas from: AI-Powered Screenshot to Text',
  description: '[
  {
    "title": "Instant Meeting Notes",
    "one_liner": "Convert your screenshots of meeting notes directly into organized text documents.",
    "why_now": "Remote work culture demands efficient digital note-taking solutions.",
    "novel_mechanism": "Utilizes AI to recognize and categorize contextual text from images effortlessly.",
    "ai_stack": [
      "Claude/GPT",
      "RAG",
      "Vision",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Convert conference session screenshots into summaries.",
      "Create action items from team discussions captured in images."
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "OCR conversion",
        "Text structuring",
        "Export to document"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "Stripe"
      ],
      "data_bootstrap": [
        "public meeting template databases",
        "synthetic text from educational resources"
      ],
      "risk": [
        "Low user adoption",
        "Technical OCR limitations"
      ],
      "mitigation": [
        "Target niche audience first",
        "Iterate based on user feedback"
      ]
    },
    "go_to_market": {
      "hooks": [
        "Real-time productivity boost",
        "See your notes transformed before your eyes"
      ],
      "channels": [
        "ProductHunt",
        "LinkedIn",
        "Slack communities"
      ],
      "pricing": {
        "free": "Limited features",
        "pro": "$5/month",
        "business": "$20/month"
      }
    },
    "moat": [
      "User-created templates",
      "Community-driven improvement features",
      "Data-driven personalization"
    ],
    "scores": {
      "novelty": 7,
      "72h_feasibility": 8,
      "revenue_potential": 6,
      "defensibility": 7
    },
    "total_score": 28,
    "reasoning": "Unlike traditional OCR tools, this focuses on a specific niche with an intuitive user experience."
  },
  {
    "title": "Visual Recipe Creator",
    "one_liner": "Turn screenshots of recipes into formatted steps and ingredients lists.",
    "why_now": "The rise of social media cooking shows and food blogs increases need for practical recipe tools.",
    "novel_mechanism": "Extracts and interprets cooking instructions based on visual layout.",
    "ai_stack": [
      "GPT",
      "Vision",
      "Embeddings"
    ],
    "edge_use_cases": [
      "Convert Instagram food posts into structured recipes.",
      "Aggregate recipes from Pinterest images."
    ],
    "blue_ocean": true,
    "execution_72h": {
      "mvp_scope": [
        "OCR for recipes",
        "Ingredient extraction",
        "User-generated content submissions"
      ],
      "tools": [
        "Next.js",
        "Supabase",
        "AlchemyAPI"
      ],
      "data_bootstrap": [
        "Public recipe databases",
        "Food image datasets"
      ],
      "risk": [
        "Privacy issues with user images",
        "High competition"
      ],
      "mitigation": [
        "Strict image handling policies",
        "Focus on organic growth through influencers"
      ]
    },
    "go_to_market": {
      "hooks": [
        "From picture to plate in seconds!",
        "Transform cooking chaos into order."
      ],
      "channels": [
        "Instagram",
        "YouTube",
        "Cooking blogs"
      ],
      "pricing": {
        "free": "Basic conversion",
        "pro": "$3/month",
        "business": "$15/month"
      }
    },
    "moat": [
      "Partnerships with food influencers",
      "Rich recipe database",
      "User loyalty through custom features"
    ],
    "scores": {
      "novelty": 8,
      "72h_feasibility": 6,
      "revenue_potential": 5,
      "defensibility": 6
    },
    "total_score": 25,
    "reasoning": "This combines a growing trend with a unique utility not offered by mainstream OCR applications."
  }
]',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ar" dir="rtl">
      <body className={inter.className}>{children}</body>
    </html>
  )
}