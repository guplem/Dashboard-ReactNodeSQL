-- CreateTable
CREATE TABLE `Project` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `type` ENUM('RAG', 'Chatbot', 'Classifier', 'RecommendationEngine', 'Summarization', 'AnomalyDetection', 'Translation', 'TextGeneration', 'SpeechRecognition', 'ImageRecognition', 'PredictiveAnalytics', 'SpeechSynthesis', 'SentimentAnalysis', 'VisualQuestionAnswering', 'ComplianceMonitoring', 'HealthMonitoring') NOT NULL DEFAULT 'RAG',
    `conformityProgress` DECIMAL(65, 30) NOT NULL DEFAULT 0.0,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
