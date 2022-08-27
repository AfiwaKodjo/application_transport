-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Hôte : 127.0.0.1
-- Généré le : sam. 27 août 2022 à 13:51
-- Version du serveur : 10.4.24-MariaDB
-- Version de PHP : 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de données : `transport`
--

-- --------------------------------------------------------

--
-- Structure de la table `hibernate_sequence`
--

CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `hibernate_sequence`
--

INSERT INTO `hibernate_sequence` (`next_val`) VALUES
(69);

-- --------------------------------------------------------

--
-- Structure de la table `lignes`
--

CREATE TABLE `lignes` (
  `id` int(11) NOT NULL,
  `depart` varchar(255) DEFAULT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `terminus` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `lignes`
--

INSERT INTO `lignes` (`id`, `depart`, `nom`, `terminus`) VALUES
(1, 'Vogan', 'Vogan-Djagblé', 'Djagblé'),
(58, 'Assigamé', 'Assigamé-Gbadago', 'Gbadago'),
(62, 'BIA', 'BIA-Kpogan', 'Kpogan'),
(67, 'Rex', 'Rex-Djagbé', 'Djagblé');

-- --------------------------------------------------------

--
-- Structure de la table `pt_arrets`
--

CREATE TABLE `pt_arrets` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL,
  `quartier_id` int(11) NOT NULL,
  `ligne_id` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `pt_arrets`
--

INSERT INTO `pt_arrets` (`id`, `nom`, `quartier_id`, `ligne_id`) VALUES
(2, 'Box de Gbadago', 3, 67),
(19, 'marché de Togblékopé', 5, 67),
(24, 'marché de Hanoukopé', 23, 67),
(27, 'stade de Gbadago', 3, NULL),
(49, 'marché de Gbadago', 3, NULL),
(61, 'Luxolin', 60, 62);

-- --------------------------------------------------------

--
-- Structure de la table `quartiers`
--

CREATE TABLE `quartiers` (
  `id` int(11) NOT NULL,
  `nom` varchar(255) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Déchargement des données de la table `quartiers`
--

INSERT INTO `quartiers` (`id`, `nom`) VALUES
(26, 'Baguida'),
(3, 'Gbadago'),
(23, 'Hanoukopé'),
(60, 'Kagnikopé'),
(63, 'Nukafu'),
(5, 'Togblékopé');

--
-- Index pour les tables déchargées
--

--
-- Index pour la table `lignes`
--
ALTER TABLE `lignes`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_nukniexo97y06w36c8sjh7phx` (`nom`);

--
-- Index pour la table `pt_arrets`
--
ALTER TABLE `pt_arrets`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_5o8k9at80fa52h6x4nvhnhqky` (`nom`),
  ADD KEY `FK8d06dm7nmt0bggoltecptns94` (`quartier_id`),
  ADD KEY `FKqdku1elx70tnjkx0afsqt1sor` (`ligne_id`);

--
-- Index pour la table `quartiers`
--
ALTER TABLE `quartiers`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `UK_2p1o1s03w0u9p4m714t8sc5yy` (`nom`);

--
-- Contraintes pour les tables déchargées
--

--
-- Contraintes pour la table `pt_arrets`
--
ALTER TABLE `pt_arrets`
  ADD CONSTRAINT `FK8d06dm7nmt0bggoltecptns94` FOREIGN KEY (`quartier_id`) REFERENCES `quartiers` (`id`),
  ADD CONSTRAINT `FKqdku1elx70tnjkx0afsqt1sor` FOREIGN KEY (`ligne_id`) REFERENCES `lignes` (`id`);
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
