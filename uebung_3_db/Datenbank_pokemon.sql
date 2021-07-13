-- phpMyAdmin SQL Dump
-- version 4.6.6deb4
-- https://www.phpmyadmin.net/
--
-- Host: localhost:3306
-- Generation Time: Jul 12, 2021 at 11:34 AM
-- Server version: 10.1.41-MariaDB-0+deb9u1
-- PHP Version: 7.0.33-50+0~20210604.56+debian9~1.gbpa45c80

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `537449_52_1`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_pokemon`
--

CREATE TABLE `tbl_pokemon` (
  `id` int(10) UNSIGNED NOT NULL,
  `name` varchar(20) NOT NULL DEFAULT '',
  `energie` varchar(20) NOT NULL DEFAULT '',
  `punkte` tinyint(3) UNSIGNED NOT NULL DEFAULT '0',
  `beschreibung` mediumtext NOT NULL,
  `bild` varchar(24) NOT NULL DEFAULT 'leer.gif'
) ENGINE=InnoDB DEFAULT CHARSET=utf8 PACK_KEYS=0;

--
-- Dumping data for table `tbl_pokemon`
--

INSERT INTO `tbl_pokemon` (`id`, `name`, `energie`, `punkte`, `beschreibung`, `bild`) VALUES
(1, 'Tangela', 'Green', 50, 'Looking for the world like a walking plate of spaghetti or a two-legged, tail-less sheepdog, Tangela is one of the shyest Pokemon.', 'tangela.gif'),
(2, 'Nidoran', 'Green', 40, 'Nidoran, one of the few two-gender Pokemon, attack other Pokemon with poisonous barbs that portrude from their backs. Male Nidoran stiffen their ears when they sense danger and are found in both versions of the game. Over time, male Nidoran evolve into Nidorino and Nidoking.', 'nidoran.gif'),
(3, 'Bellsprout', 'Green', 15, 'Bellsprout often begins a battle with Growth, which will increase the power of its special attacks. It would be wise to use your most powerful attack before Bellsprout has a chance to launch an attack of its own. Zürich is great', 'bellsprout.gif'),
(4, 'Voltorb', 'Yellow', 40, 'Voltorb use a Screech attack to lower their opponents defense rating before launching an electrical assault. If the odds are against a Voltorb, it may self-destruct to avoid capture. These Pokemon evolve into Electrode.', 'voltorb.gif'),
(5, 'Pikachu', 'Yellow', 40, 'These mouse-like creatures are among the most sought-after Pokemon. Trainers often have a hard time keeping several Pikachu in one place, however, because a high concentration of Pikachu will trigger electrical disturbances in the atmosphere. Pikachu evolve into Raichu with the use of the Thunder Stone.', 'pikachu.gif'),
(6, 'Pidgey', 'White', 40, 'One of the most common kinds of Pokemon, Pidgey are classified as Normal-type and Flying-type Pokemon, and they can blind their opponents by stirring up clouds of sand with their wings. Over time, Pidgey will evolve into Pidgeotto and Pidgeot.', 'pidgey.gif'),
(7, 'Rattata', 'White', 30, 'A common type of Pokemon, Rattata use their sharp teeth to defend themselves from attackers. Despite their ferocious appearance, Rattata share the same habitat as Pidgey, where both Pokemon coexist peacefully. As the game progresses, Rattata evolve into Raticate.', 'rattata.gif'),
(8, 'Doduo', 'Yellow', 50, 'Though these Pokemon exhibit Flying-type characteristics, they cannot fly. However, they can run at high speed. Doduo evolve into Dodrio at level 31.', 'doduo.gif'),
(9, 'Dratini', 'White', 40, 'Dratini takes much longer than most Pokemon to evolve. It must reach level 30 before it changes into Dragonair.', 'dratini.gif'),
(10, 'Mewtwo', 'Purple', 70, 'Mewtwo was created in the Pokemon Lab on Cinnabar Island. Scientists tried to create the perfect fighting machine, and they succeeded - perhaps too well. Mewtwo is extremely hostile and cant stand being in a Poke Ball.', 'mewtwo.gif'),
(11, 'Jynx', 'Purple', 70, 'Jynx has an unusual combination of Ice and Psychic characteristics. Its evolution is not known at this time, though its powers do grow stronger over time.', 'jynx.gif'),
(12, 'Drowzee', 'Purple', 50, 'Though these Pokemon have a weak physical attack, Drowzee will use their psychic abilities to make other Pokemon fall asleep during combat. At level 26, they evolve into Hypno.', 'drowzee.gif'),
(13, 'Poliwag', 'Blue', 40, 'Lacking arms, Poliwag sport newly grown legs and live in the water around Viridian City. To capture a Poliwag, trainers must use a rod and go fishing. Over time, Poliwag evolve into the more powerful Poliwhirl and Poliwrath.', 'poliwag.gif'),
(14, 'Seel', 'Blue', 60, 'An Arctic-dwelling type of Pokemon, Seel fight antagonists with their Aurora Beams, which cause damage by decreasing an opponents power. At level 34, Seel evolve into Dewgong.', 'seel.gif'),
(15, 'Staryu', 'Blue', 40, 'they use their psychic powers to move themselves around. These rare Pokemon also employ Minimize power to evade attack, and they can be found in the waters around the Blue games Cinnabar Island, Seafoam Island, and routes 19, 20, and 21. Trainers should use the Water Stone to transform Staryu into Starmie.', 'staryu.gif'),
(16, 'Growlithe', 'Red', 60, 'The elusive Growlithe can be found only on Route 7, Route 8 or Cinnabar Island. Handle combat with it carefully.', 'growlithe.gif'),
(17, 'Machop', 'Brown', 50, 'Machop are extremely agile and will often dodge specially designed attacks. Machop are among the more intelligent Pokemon and are known for their mastery of various martial arts. At level 28, Machop evolve into Machoke.', 'machop.gif'),
(18, 'Diglett', 'Brown', 30, 'The challenge with Diglett is not finding one but capturing it before it faints or runs away - so make sure to keep a lower-level Pokemon with you as you head into Digletts Cave. Another interesting trait: Diglett dont evolve, but they do band together in groups of three.', 'diglett.gif'),
(19, 'Venomoth', 'Green', 70, 'Venomoth is short on physical ability, but long on various disabling attacks. Youd better have lots of Antidote and other cures.', 'venomoth.gif'),
(20, 'Farfetched', 'White', 50, 'It looks like a duck and quacks like a duck, but it surely isnt a duck! Farfetchd uses twigs as mini-swords.', 'farfetched.gif'),
(21, 'Charmander', 'Red', 50, 'With their flaming tail, Charmander are tough Pokemon to handle, even for a skilled trainer. Starting a new game with a Charmander can be difficult, but if you can harness its power, the effort will pay off in early battles. If used correctly, they will evolve into Charmeleon and Charizard.', 'charmander.gif'),
(22, 'Weedle', 'Green', 40, 'While most Pokemon belong to a single category or type, Weedle feature the combined characteristics of a Bug-type and Poison-type Pokemon. Weedle have only two attack strategies, but their sting is poisonous and their String-Shot attack can temporarily reduce an enemys speed. Weedle evolve into Kakuna and eventually into Beedrill. Found in both versions, these Pokemon are rare in the Blue version.', 'weedle.gif'),
(23, 'Bulbasaur', 'Green', 40, 'Bulbasaur are a combination of Grass-type and Poison-type Pokemon. Because they are Grass-type Pokemon, Bulbasaur have plant-like characteristics such as the large, leafy growth on their back. Over time, Bulbasaur will evolve into Ivysaur and Venusaur.', 'bulbasaur.gif'),
(24, 'Caterpie', 'Green', 40, '!!One of the Bug-type Pokemon, Caterpie will evolve into Metapod and Butterfree. These Pokemon are rare in the Red version and reside in both versions of the game.', 'caterpie.gif'),
(25, 'Koffing', 'Green', 50, 'Koffing store poison gases within their bodies, sometimes causing them to explode without warning. At level 35, these Pokemon evolve into Weezing.', 'koffing.gif'),
(26, 'Squirtle', 'Blue', 70, 'One of three Pokemon offered by Professor Oak at the beginning of the game. Squirtle start out cute and cuddly but soon evolve into formidable fighters: first Wartortle, then Blastoise. Note: In the games early stages, Squirtle tend to fare better against combatants than Charmander.', 'squirtle.gif');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_pokemon`
--
ALTER TABLE `tbl_pokemon`
  ADD PRIMARY KEY (`id`),
  ADD KEY `Name` (`name`,`energie`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_pokemon`
--
ALTER TABLE `tbl_pokemon`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
