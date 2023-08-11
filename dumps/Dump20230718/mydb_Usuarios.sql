CREATE DATABASE  IF NOT EXISTS `mydb` /*!40100 DEFAULT CHARACTER SET utf8mb3 */ /*!80016 DEFAULT ENCRYPTION='N' */;
USE `mydb`;
-- MySQL dump 10.13  Distrib 8.0.31, for macos12 (x86_64)
--
-- Host: 127.0.0.1    Database: mydb
-- ------------------------------------------------------
-- Server version	8.0.32

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `Usuarios`
--

DROP TABLE IF EXISTS `Usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `Usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `nombre` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `apellidos` varchar(50) COLLATE utf8mb4_unicode_ci NOT NULL,
  `dni` varchar(12) COLLATE utf8mb4_unicode_ci NOT NULL,
  `email` varchar(80) COLLATE utf8mb4_unicode_ci NOT NULL,
  `password` varchar(255) COLLATE utf8mb4_unicode_ci NOT NULL,
  `telefono` int NOT NULL,
  `fecha_alta` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `estado` tinyint NOT NULL,
  `departamento` enum('frontend','backend','full stack') COLLATE utf8mb4_unicode_ci NOT NULL DEFAULT 'frontend',
  PRIMARY KEY (`id`),
  UNIQUE KEY `dni_UNIQUE` (`dni`),
  UNIQUE KEY `telefono_UNIQUE` (`telefono`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=251 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `Usuarios`
--

LOCK TABLES `Usuarios` WRITE;
/*!40000 ALTER TABLE `Usuarios` DISABLE KEYS */;
INSERT INTO `Usuarios` VALUES (1,'Juan','Pérez','12345678A','juan@example.com','123456',123456789,'2022-01-14 23:00:00',1,'frontend'),(2,'María','Gómez','23456789B','maria@example.com','abcdef',987654321,'2021-11-01 23:00:00',1,'frontend'),(3,'Carlos','López','34567890C','carlos@example.com','qwerty',598314267,'2023-02-27 23:00:00',2,'frontend'),(4,'Laura','Rodríguez','45678901D','laura@example.com','987654',758913642,'2022-07-06 22:00:00',1,'frontend'),(5,'Pedro','Martínez','56789012E','pedro@example.com','asdfgh',135792468,'2023-05-31 22:00:00',1,'frontend'),(6,'Ana','Sánchez','67890123F','ana@example.com','135792',246813579,'2022-03-18 23:00:00',2,'frontend'),(7,'José','Romero','78901234G','jose@example.com','zxcvbn',369258147,'2023-01-09 23:00:00',1,'frontend'),(8,'Isabel','Torres','89012345H','isabel@example.com','qwerty',951753684,'2021-09-04 22:00:00',2,'frontend'),(9,'Sergio','Castro','90123456I','sergio@example.com','123456',824613795,'2022-12-23 23:00:00',1,'frontend'),(10,'Andrea','Morales','01234567J','andrea@example.com','abcdef',432187654,'2023-04-16 22:00:00',1,'frontend'),(11,'Manuel','Ortega','12345678K','manuel@example.com','qwerty',987612345,'2022-08-10 22:00:00',2,'frontend'),(12,'Marta','Herrera','23456789L','marta@example.com','asdfgh',246597813,'2023-03-02 23:00:00',1,'frontend'),(13,'David','Ramos','34567890M','david@example.com','987654',139572864,'2022-06-20 22:00:00',1,'frontend'),(14,'Paula','Silva','45678901N','paula@example.com','135792',975318246,'2023-05-12 22:00:00',2,'frontend'),(15,'Francisco','Morales','56789012O','francisco@example.com','asdfgh',624175938,'2022-02-07 23:00:00',1,'frontend'),(16,'Elena','Paredes','67890123P','elena@example.com','zxcvbn',814725936,'2021-12-30 23:00:00',2,'frontend'),(17,'Javier','Delgado','78901234Q','javier@example.com','123456',739218645,'2023-07-09 22:00:00',1,'frontend'),(18,'Lucía','Castro','89012345R','lucia@example.com','qwerty',695832417,'2022-10-26 22:00:00',2,'frontend'),(19,'Pablo','Méndez','90123456S','pablo@example.com','abcdef',176493825,'2021-08-13 22:00:00',1,'frontend'),(20,'Carmen','Molina','01234567T','carmen@example.com','987654',384917625,'2023-06-05 22:00:00',1,'frontend'),(250,'claudia','lopez','71206753n','claudiaaaa@gmail.com','123456',666778886,'2023-03-26 22:00:00',1,'frontend');
/*!40000 ALTER TABLE `Usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2023-07-18 13:57:59
