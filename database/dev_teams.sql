-- phpMyAdmin SQL Dump
-- version 5.2.2
-- https://www.phpmyadmin.net/
--
-- Host: db
-- Generation Time: Nov 04, 2025 at 09:48 AM
-- Server version: 9.4.0
-- PHP Version: 8.2.29

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `dev_teams`
--
CREATE DATABASE IF NOT EXISTS `dev_teams` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci;
USE `dev_teams`;

-- --------------------------------------------------------

--
-- Table structure for table `dev_teams`
--

CREATE TABLE `dev_teams` (
  `team_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `team_name` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `dev_teams`
--

INSERT INTO `dev_teams` (`team_id`, `team_name`, `created_at`, `updated_at`) VALUES
('3f9b24c2-32a8-4c1b-bc70-9c28f8b3e621', 'Frontend Avengers', '2025-11-04 08:14:55', '2025-11-04 08:14:55'),
('e21cb6a0-92d4-4b6f-a593-122ff7d48b18', 'Backend Titans', '2025-11-04 08:14:55', '2025-11-04 08:14:55');

-- --------------------------------------------------------

--
-- Table structure for table `meetings`
--

CREATE TABLE `meetings` (
  `id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `team_id` char(36) CHARACTER SET utf8mb4 COLLATE utf8mb4_bin NOT NULL,
  `start_time` datetime NOT NULL,
  `end_time` datetime NOT NULL,
  `description` text,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

--
-- Dumping data for table `meetings`
--

INSERT INTO `meetings` (`id`, `team_id`, `start_time`, `end_time`, `description`, `created_at`, `updated_at`) VALUES
('1d67e04b-3050-4d49-8b58-b8e02d80ad7b', '3f9b24c2-32a8-4c1b-bc70-9c28f8b3e621', '2025-11-07 09:30:00', '2025-11-07 10:30:00', 'Emerald Tower', '2025-11-04 09:01:14', '2025-11-04 09:01:14'),
('1f91a81d-3108-4fd7-9a4b-9eecb82c5879', 'e21cb6a0-92d4-4b6f-a593-122ff7d48b18', '2025-11-06 09:30:00', '2025-11-06 10:30:00', 'Amber Hall', '2025-11-04 09:01:14', '2025-11-04 09:01:14'),
('2b83b3c3-6bb2-44ac-b674-6cf9b0c4ab59', 'e21cb6a0-92d4-4b6f-a593-122ff7d48b18', '2025-11-04 15:00:00', '2025-11-04 16:30:00', 'Blue Valley', '2025-11-04 09:01:14', '2025-11-04 09:01:14'),
('37c424d0-c91d-4d1e-b4f2-7ab05e1d36a0', 'e21cb6a0-92d4-4b6f-a593-122ff7d48b18', '2025-11-08 13:00:00', '2025-11-08 14:00:00', 'Golden Room', '2025-11-04 09:01:14', '2025-11-04 09:01:14'),
('5b24e77f-6803-44ab-b89e-cc5a8a93b102', '3f9b24c2-32a8-4c1b-bc70-9c28f8b3e621', '2025-11-09 16:00:00', '2025-11-09 17:00:00', 'Azure Hub', '2025-11-04 09:01:14', '2025-11-04 09:01:14'),
('8a6ce165-c412-40d8-8cb8-392b2b2c4525', '3f9b24c2-32a8-4c1b-bc70-9c28f8b3e621', '2025-11-13 13:00:00', '2025-11-13 14:00:00', 'Silver Grove', '2025-11-04 09:01:14', '2025-11-04 09:01:14'),
('94fffd8f-6b6f-4db2-8d7a-6a2a30f34a56', 'e21cb6a0-92d4-4b6f-a593-122ff7d48b18', '2025-11-10 16:00:00', '2025-11-10 17:00:00', 'Emerald Tower', '2025-11-04 09:01:14', '2025-11-04 09:01:14'),
('9c0d073d-08a9-46f2-b3e9-116aee66cc3c', '3f9b24c2-32a8-4c1b-bc70-9c28f8b3e621', '2025-11-11 10:00:00', '2025-11-11 11:30:00', 'Sunset Room', '2025-11-04 09:01:14', '2025-11-04 09:01:14'),
('a1fa4188-62ab-40e4-8790-4f546ebffad3', '3f9b24c2-32a8-4c1b-bc70-9c28f8b3e621', '2025-11-15 09:00:00', '2025-11-15 10:00:00', 'Ivory Loft', '2025-11-04 09:01:14', '2025-11-04 09:01:14'),
('b18393e5-2ed3-4b9e-a3da-05664f7467a3', '3f9b24c2-32a8-4c1b-bc70-9c28f8b3e621', '2025-11-03 11:00:00', '2025-11-03 12:00:00', 'Crimson Hall', '2025-11-04 09:01:14', '2025-11-04 09:01:14'),
('cb6f54ee-d72d-4a9b-86c1-355c3bc0dcdb', 'e21cb6a0-92d4-4b6f-a593-122ff7d48b18', '2025-11-02 10:00:00', '2025-11-02 11:00:00', 'Crimson Hall', '2025-11-04 09:01:14', '2025-11-04 09:01:14'),
('d184e1ba-b3ef-4100-928b-60fc40eb4330', '3f9b24c2-32a8-4c1b-bc70-9c28f8b3e621', '2025-11-06 11:39:00', '2025-11-14 13:39:00', 'felony alley', '2025-11-04 09:39:40', '2025-11-04 09:39:40'),
('dd86f058-2e45-497a-9bde-97d1f99b268b', 'e21cb6a0-92d4-4b6f-a593-122ff7d48b18', '2025-11-12 11:00:00', '2025-11-12 12:00:00', 'Azure Hub', '2025-11-04 09:01:14', '2025-11-04 09:01:14'),
('e5d1ab6a-04b3-4cc3-a469-bcd108ef93e9', 'e21cb6a0-92d4-4b6f-a593-122ff7d48b18', '2025-11-14 09:00:00', '2025-11-14 10:30:00', 'Ivory Loft', '2025-11-04 09:01:14', '2025-11-04 09:01:14'),
('f3dce3cc-9278-4a0d-8a7e-f4d90c37ef11', '3f9b24c2-32a8-4c1b-bc70-9c28f8b3e621', '2025-11-01 09:00:00', '2025-11-01 10:00:00', 'Blue Valley', '2025-11-04 09:01:14', '2025-11-04 09:01:14'),
('f4c81735-d707-4b26-9cdd-c84b4eeb3d2a', '3f9b24c2-32a8-4c1b-bc70-9c28f8b3e621', '2025-11-05 14:00:00', '2025-11-05 15:30:00', 'Golden Room', '2025-11-04 09:01:14', '2025-11-04 09:01:14');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `dev_teams`
--
ALTER TABLE `dev_teams`
  ADD PRIMARY KEY (`team_id`);

--
-- Indexes for table `meetings`
--
ALTER TABLE `meetings`
  ADD PRIMARY KEY (`id`),
  ADD KEY `team_id` (`team_id`);

--
-- Constraints for dumped tables
--

--
-- Constraints for table `meetings`
--
ALTER TABLE `meetings`
  ADD CONSTRAINT `meetings_ibfk_1` FOREIGN KEY (`team_id`) REFERENCES `dev_teams` (`team_id`) ON DELETE CASCADE ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
