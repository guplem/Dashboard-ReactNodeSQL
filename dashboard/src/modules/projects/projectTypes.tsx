export enum ProjectType {
  RAG = "RAG",
  Chatbot = "Chatbot",
  Converter = "Converter",
  Classifier = "Classifier",
  RecommendationEngine = "RecommendationEngine",
  Summarization = "Summarization",
  AnomalyDetection = "AnomalyDetection",
  Translation = "Translation",
  TextGeneration = "TextGeneration",
  SpeechRecognition = "SpeechRecognition",
  ImageRecognition = "ImageRecognition",
  PredictiveAnalytics = "PredictiveAnalytics",
  SpeechSynthesis = "SpeechSynthesis",
  SentimentAnalysis = "SentimentAnalysis",
  VisualQuestionAnswering = "VisualQuestionAnswering",
  ComplianceMonitoring = "ComplianceMonitoring",
  HealthMonitoring = "HealthMonitoring",
}

export const projectTypesSelector = [
  { id: ProjectType.RAG, name: "RAG" },
  { id: ProjectType.Chatbot, name: "Chatbot" },
  { id: ProjectType.Converter, name: "Converter" },
  { id: ProjectType.Classifier, name: "Classifier" },
  { id: ProjectType.RecommendationEngine, name: "Recommendation Engine" },
  { id: ProjectType.Summarization, name: "Summarization" },
  { id: ProjectType.AnomalyDetection, name: "Anomaly Detection" },
  { id: ProjectType.Translation, name: "Translation" },
  { id: ProjectType.TextGeneration, name: "Text Generation" },
  { id: ProjectType.SpeechRecognition, name: "Speech Recognition" },
  { id: ProjectType.ImageRecognition, name: "Image Recognition" },
  { id: ProjectType.PredictiveAnalytics, name: "Predictive Analytics" },
  { id: ProjectType.SpeechSynthesis, name: "Speech Synthesis" },
  { id: ProjectType.SentimentAnalysis, name: "Sentiment Analysis" },
  { id: ProjectType.VisualQuestionAnswering, name: "Visual Question Answering" },
  { id: ProjectType.ComplianceMonitoring, name: "Compliance Monitoring" },
  { id: ProjectType.HealthMonitoring, name: "Health Monitoring" },
];
