-- AlterTable
ALTER TABLE `Project` MODIFY `type` ENUM('RAG', 'Chatbot', 'Converter', 'Classifier', 'RecommendationEngine', 'Summarization', 'AnomalyDetection', 'Translation', 'TextGeneration', 'SpeechRecognition', 'ImageRecognition', 'PredictiveAnalytics', 'SpeechSynthesis', 'SentimentAnalysis', 'VisualQuestionAnswering', 'ComplianceMonitoring', 'HealthMonitoring') NOT NULL DEFAULT 'RAG';
