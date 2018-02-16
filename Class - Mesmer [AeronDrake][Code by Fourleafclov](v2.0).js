/*	-WHAT IS THIS?-
	This file adds optional material to "MPMB's Character Record Sheet" found at https://flapkan.com/mpmb/charsheets
	Import this file using the "Add Extra Materials" bookmark.

	-KEEP IN MIND-
	It is recommended to enter the code in a fresh sheet before adding any other information (i.e. before making your character with it).
*/

/*	-INFORMATION-
	Subject:	Class
	Effect:		This script adds a class called "Mesmer" (v2.0) and the three Magic Traditions for it: "Domination Magic", "Dueling Magic", "Illusion Magic", "Inspiration Magic"
				This is taken from Reddit Post (https://www.reddit.com/r/UnearthedArcana/comments/7xffu5)
				This class and subclasses are made by /u/AeronDrake
				
	Code by:		/u/Fourleafclov
	Completed Date:	2018-02-16 (sheet v12.999)

*/

var iFileName = "Class-Mesmer-2.0.js";
RequiredSheetVersion(12.999);

[//Mesmer spell list
	//level 0 (cantrips)
	"energy bolt", "friends", "light", "mage hand", "minor illusion", "prestidigitation", "sword burst", "thaumaturgy",
	//level 1
	"backfire", "charm person", "color spray", "detect magic", "disguise self", "dissonant whispers", "empathy", "illusory script", "mage armor", "magic missile", "silent image", "sleep",
	//level 2
	"alter self", "blindness/deafness", "blur", "calm emotions", "crown of madness", "hold person", "invisibility", "lesser restoration", "magic mouth", "mind spike", "mirror image", "nystul's magic aura", "phantasmal force", "shadow blade", "silence", "spirit of failure", "suggestion", "zone of truth",
	//level 3
	"catnap", "counterspell", "dispel magic", "enemies abound", "fear", "haste", "hypnotic pattern", "major image", "nondetection", "phantom steed", "power leech", "protection from energy", "remove curse", "slow",
	//level 4
	"charm monster", "chaos storm", "compulsion", "confusion", "greater invisibility", "hallucinatory terrain", "otiluke's resilient sphere", "phantasmal killer", "polymorph", 
	//level 5
	"bigby's hand", "creation", "dominate person", "dream", "greater restoration", "hold monster", "mislead", "modify memory", "scrying", "seeming", "steel wind strike", "synaptic static", "wall of force", 
	//level 6
	"disintegrate", "globe of invulnerability", "guards and wards", "mass suggestion", "mental prison", "programmed illusion", 
	//level 7
	"etherealness", "forcecage", "mirage arcane", "mordenkainen's sword", "power word pain", "project image", "squester", "simulacrum", 
	//level 8
	"antimagic field", "antipathy/sympathy", "dominate monster", "feeblemind", "glibness", "illusory dragon", "maddening darkness", "mind blank", "power word stun", 
	//level 9
	"mass polymorph", "psychic scream", "shapechange", "true polymorph", "weird"
].forEach(function (mesmerSpells) {
	if (SpellsList[mesmerSpells]) SpellsList[mesmerSpells].classes.push("mesmer");
});

// Mesmer Spells and Archetype Armor to Add
SpellsList["backfire"] = { 
	name : "Backfire",
	classes : ["mesmer"],
	source : ["HB", 0],
	ritual : false,
	level : 1,
	school : "Ench",
	time : "1 rea",
	range : "60 ft",
	components : "V,S",
	duration : "Instantaneous",
	save : "Wis",
	description : "Cast when attacked, Wis save to give dis. 2d8+1d8/SL force dmg on hit, save halves",
	descriptionFull : "The creature must make a Wisdom saving throw. On a failed save, it has disadvantage on the attack roll made against you. If the attack still hits you, the attacker takes 2d8 force damage on a failed save, or half as much damage on a successful one." + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d8 for each slot level above 1st.",
	psionic : false,
};
SpellsList["chaos storm"] = {
	name : "Chaos Storm",
	classes : ["mesmer"],
	source : ["HB", 0],
	ritual : false,
	level : 4,
	school : "Evoc",
	time : "1 a",
	range : "150 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "20-ft rad sphere storm, difficult ter., 3d8+1d8/SL Force dmg, save halves ; bns move 10ft",
	descriptionFull : "You create an energy storm in a 20-foot-radius sphere on the ground centered on a point within range. The area is considered difficult terrain while the storm last. When a creature enters the area for the first time on a turn or starts its turn there, it must make a Wisdom saving throw, taking 3d8 force damage on a failed save, or half as much on a successful one." + "\n   " + " You can use a bonus action to move the storm 10 feet in any direction " + AtHigherLevels + "When you cast this spell using a spell slot of 5th level or higher, the damage increases by 1d8 for every slot level above 4th.",
	psionic : false,
};
SpellsList["empathy"] = { 
	name : "Empathy",
	classes : ["mesmer"],
	source : ["HB", 0],
	ritual : false,
	level : 1,
	school : "Ench",
	time : "1 a",
	range : "60 ft",
	components : "V,S",
	duration : "Conc, 1 min",
	save : "Wis",
	description : "1 crea. saves or takes 1d10+1d10/SL each time it makes an atk roll. Repeat save at end of turn.",
	descriptionFull : "A creature that you can see within range must make a Wisdom saving throw. On a failed save, the target is affected by this spell. Until the spell ends, whenever the creature makes an attack roll, it takes 1d10 force damage." + "\n   " + " The creature can make a Wisdom saving throw at the end of each of its turns. On a successful save, the spell ends " + AtHigherLevels + "When you cast this spell using a spell slot of 2nd level or higher, the damage increases by 1d10 for every slot level above 1st.",
	psionic : false,
};
SpellsList["energy bolt"] = {
	name : "Energy Bolt",
	classes : ["mesmer"],
	source : ["HB", 0],
	ritual : false,
	level : 0,
	school : "Evoc",
	time : "1 a",
	range : "120 ft",
	components : "V,S",
	duration : "Instantaneous",
	description : "Spell attack bolt 1d10 Force dmg; CL5:2d10, CL11:3d10, CL17:4d10",
	descriptionFull : "As an action, you create a small energy bolt to strike one creature or object that you can see within 120 feet of you. Make a ranged spell attack against the target. On a hit, the target takes 1d10 force damage." + "\n   " + "This spell's damage increases by 1d10 when you reach 5th level (2d10), 11th level (3d10), and 17th level (4d10).",
	psionic : false,
	};
SpellsList["power leech"] = {
	name : "Power Leech",
	classes : ["mesmer"],
	source : ["HB", 0],
	ritual : false,
	level : 3,
	school : "Abjur",
	time : "1 rea",
	range : "60 ft",
	components : "V",
	duration : "Instantaneous",
	save : "Wis",
	description : "Target crea. casting; On failed save, regain spell slot equal to half SL cast rounded down + Charisma mod",
	descriptionFull : "Choose a creature that is casting a spell within range that you can see. The creature must make a Wisdom saving throw. On a failed save, you regain a an expended spell slot equal to half the spell level used by the creature (rounded down) plus your Charisma modifier.",
	psionic : false,
};
SpellsList["spirit of failure"] = {
	name : "Spirit of Failure",
	classes : ["mesmer"],
	source : ["HB", 0],
	ritual : false,
	level : 2,
	school : "Ench",
	time : "1 rea",
	range : "30 ft",
	components : "V",
	duration : "1 rnd",
	description : "Until start of crea. next turn, rolls 1d100;  1-25 forces atk to miss and spell ends",
	descriptionFull : "You implant a spirit fully of thoughts with failures on your enemies to reduce their abilities in combat. Until the start of it next turn, that creature must roll a d100 when it makes an attack roll. If the result is 1 to 25, the attack misses and the spell ends.",
	psionic : false,
};
ArmourList["unarmored defense (cha)"] = {
	regExpSearch : /^(?=.*unarmored)(?=.*defense)(?=.*charisma).*$/i,
	name : "Unarmored Defense (Cha)",
	source : ["HB", 0],
	type : "",
	ac : 10,
	dex : 5,
	addMod : true,
	cha : 5,
};

ClassList["mesmer"] = {
	regExpSearch : /^(?=.*mesmer).*$/i,
	name : "Mesmer",
	source : ["HB", 0],
	primaryAbility : "\n \u2022 Mesmer: Charisma;",
	prereqs : "\n \u2022 Mesmer: Charisma 13;",
	die : 6, 
	improvements : [0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 5, 5],
	saves : ["Dex", "Cha"],
	skills : ["\n\n" + toUni("Mesmer") + ": Choose two from Arcana, Deception, Insight, Perception, Performance, Persuasion, and Stealth."],
	toolProfs : { 
		primary : [["Disguise Kit", "Cha"]],
		secondary : [["Disguise Kit", "Cha"]]
	},
	armor : [ // ["light", "medium", "heavy", "shields"]
		[false, false, false, false],
		[false, false, false, false]
	],
	weapons : [ // ["simple", "martial", "other"]
		[true, false, ["greatsword", "rapier", "scimitar"]],
		[true, false, false]
	],
	equipment : "Mesmer starting equipment:\n \u2022 A shortbow and quiver of 20 arrows -or- any simple weapons;\n \u2022 An arcane focus;\n \u2022 A dagger;\n \u2022 An entertainer's pack.\n\nAlternatively, choose 3d4 \xD7 10 gp worth of starting equipment instead of both the class' and the background's starting equipment.",
	subclasses : ["Magic Traditions", ["domination magic", "dueling magic", "illusion magic", "inspiration magic"]],
	attacks : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
	abilitySave : 6, // Saving Throws. (Str=1, Dex=2, Con=3, Int=4, Wis=5, Cha=6)
	spellcastingFactor : 1,
	spellcastingKnown : { //Optional; Denotes the amount and type of spells the class has access to
		cantrips : [2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5],
		spells : "list",
		prepared : true,
	},
	spellcastingList : { //Optional; Only needed if the class doesn't have its own spell list. This object denotes what spells the class has access to. All things in this object constrain the selection of spells that will be available. The contstraints are cumulative.
		class : "mesmer", //Required; The name of the class from whose spell list the spells come from. This can be "any" if the spells are not limited by a spell list of just one class. The entry has to match the name of the class in the SpellsList
		level : [0, 9], //Optional; The lower and upper limit of spell levels that the class has access to.
		},
	features : { 
		"subclassfeature1" : { 
			name : "Mesmer Magic Tradition",
			source : ["HB", 4],
			minlevel : 1,
			// Needed for Code to recognize subclasses
		},
		"spellcasting" : {
			name : "Spellcasting",
			source : ["HB", 4],
			minlevel : 1,
			description : desc([
				"I can cast prepared mesmer cantrips/spells, using Charisma as my spellcasting ability",
				"I can use an arcane focus as a spellcasting focus",
				"I can cast all mesmer spells as rituals if they have the ritual tag",
			]),
			additional : ["2 cantrips known", "2 cantrips known", "2 cantrips known", "2 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "3 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "4 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known", "5 cantrips known"],
		},
		"energy points" : {
			name : "Energy Points",
			source : ["HB", 4],
			minlevel : 1,
			description : desc([
				"Instead of gaining spell slots, I gain a pool of energy points to cast spells",
				"Point Cost: 1st(2),2nd(3),3rd(5),4th(6),5th(7),6th(9),7th(10),8th(11),9th(13)",
				"I may create a maximum of 3 slots per spell level up to 5th per long rest",
				"I may create 1 spell slot of 6th and above per long rest"
			]),
			usages : [4, 6, 14, 17, 27, 32, 38, 44, 57, 64, 73, 73, 83, 83, 94, 94, 107, 107, 114, 114],
			recovery : "long rest",
		},
		"fast casting" : {
			name : "Fast Casting",
			source : ["HB", 4],
			minlevel : 2,
			description : desc([
				"I have 2 additional reactions that I may use in the same round or separate rounds",
				"These reactions must be used for Mesmer Spells or Features",
				"I can hold a Mesmer spell as a Ready Action for a # of rounds equal to Charisma Mod",
				"The number of additional reactions increases to 3 at CL11 and 4 at CL17"
			]),
			usages : [0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4],
			recovery : "short rest",
			action : ["reaction", ""]
		},
		"charismatic" : {
			name : "Charismatic",
			source : ["HB", 4],
			minlevel : 3,
			description : desc([
				"When I roll a 1 or 2 on a Charisma-based skill check, reroll the die",
				"I must use the new roll, even if the new roll is 1 or a 2"
			]),
		},
		"energy drain" : { 
			name : "Energy Drain",
			source : ["HB", 4],
			minlevel : 3,
			description : desc([
				"Creature within 60 ft makes a Constitution save, 1d6+Cha Force dmg on fail",
				"Regain energy points equal to half the damage dealt.",
				"Damage increase by 1d6 at CL10(2d6), CL14(3d6)"
			]),
			usages : [0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
			recovery : "short rest",
			action : ["action", ""]
		},
		"mesmer knowledge" : { 
			name : "Mesmer Knowledge",
			source : ["HB", 4],
			minlevel : 7,
			description : desc([
				"I have advantage on skill checks related to magic and arcane knowledge"
			]),
			savetxt : {
				text : ["Adv. on magic/arcane knowledge checks"]
			},			
		},
		"veil of illusions" : { 
			name : "Veil of Illusions",
			source : ["HB", 4],
			minlevel : 15,
			description : desc([
				"I add twice my proficiency bonus to any Deception and Persuasion checks",
				"As a bonus action, I spend 2 energy points to impose disadvantage on",
				"    Insight checks vs me for 10 min."
			]),
			eval : "AddSkillProf('Deception', true, 'increment'); AddSkillProf('Persuasion', true, 'increment')",
			removeeval : "AddSkillProf('Deception', false, 'increment'); AddSkillProf('Persuasion', false, 'increment')",
			usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1],
			recovery : "short rest",
			action : ["action", ""]
		},
		"web of disruption" : { 
			name : "Web of Disruption",
			source : ["HB", 4],
			minlevel : 18,
			description : desc([
				"Creature within 60 ft must make a Charisma save",
				"On failure, creature is paralyzed for # of rounds equal to Charisma Mod",
				"Creature makes another Charisma save at the end of its turns, ending the effect",
				"If the effect ends before the duration of the web, creature takes 6d6 Force Damage",
				"I can not use this on two or more creatures at the same time",
				"    or on the same creature within 24 hours"
			]),
			action : ["action", ""],
			additional : ["1 crea. at a time"],
		},
		"ether feast" : { 
			name : "Ether Feast",
			source : ["HB", 4],
			minlevel : 20,
			description : desc([
				"I may create 2 spell slots for 6th and 7th level with energy points, instead of one",
			]),
			},
	},
},	

AddSubClass(
	"mesmer",
	"domination magic", // DONE
	{ 
		regExpSearch : /^(?=.*mesmer)(?=.*domination).*$/i,
		subname : "Domination Mesmer",
		source : ["HB", 5],
		fullname : "Domination Mesmer",
		features : {
			"subclassfeature1.1" : {
				name : "Visions of Regret",
				source : ["HB", 5],
				minlevel : 1,
				description : desc([
				"Cause a creature within 60 ft of me that I see hits me with an attack to make a save", 
				"Creature makes a Charisma Save, taking 2d8 Force dmg, save halves"
				]),
				usages : "Charisma mod per ",
				usagescalc : "event.value = Math.max(1, tDoc.getField(\"Cha Mod\").value);",
				recovery : "short rest",
				action : ["reaction", ""]
			},
			"subclassfeature6" : {
				name : "Cry of Frustration",
				source : ["HB", 5],
				minlevel : 6,
				description : desc([
				"Creature within 60 ft makes a saving throw, expend 3 energy point and a reaction.",
				"Creature has disadvantage on its first save, taking 1d10+Cha Mod Force dmg on fail"
				]),
				usages : "Charisma mod per ",
				usagescalc : "event.value = Math.max(1, tDoc.getField(\"Cha Mod\").value);",
				recovery : "short rest",
				action : ["reaction", ""]				
			},
			"subclassfeature10" : {
				name : "Power Lock",
				source : ["HB", 5],
				minlevel : 10,
				description : desc([
				"Creature within 60 ft that makes an attack or casts a spell must make a Charisma save.",
				"On a fail, the attack/spell fails and can not be used again until the end of it's next turn"
				]),
				usages : [0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				recovery : "short rest",
				action : ["reaction", ""]
			},
			"subclassfeature14" : {
				name : "Overload",
				source : ["HB", 5],
				minlevel : 14,
				description : desc([
				"When I attack a creature with a cantrip or spell, you can deal an extra 1d10 Force dmg"
				]),
			},
		}
	}
);

AddSubClass(
	"mesmer",
	"dueling magic", // DONE
	{ 
		regExpSearch : /^(?=.*mesmer)(?=.*dueling).*$/i,
		subname : "Dueling Mesmer",
		source : ["HB", 5],
		fullname : "Dueling Mesmer",
		features : {
			"subclassfeature1.1" : {
				name : "Illusory Duelist",
				source : ["HB", 5],
				minlevel : 1,
				description : desc([
				"While I am not wearing armor or shields, my Armor Class equals 10+Dex+Cha"
				]),
				addarmor : "Unarmored Defense (Cha)"
			},
			"subclassfeature1.2" : {
				name : "Conjure Illusions",
				source : ["HB", 5],
				minlevel : 1,
				description : desc([
				"As an action, I can create an illusion of myself in a space within 30ft of me",
				"Conjured Illusions have AC(10) ; 1 HP ; STR 2 ; Takes their turn on my Initiative",
				"    Can move up to 30 ft to a space I can see, but must remain within 120ft of me",
				"    An illusion can mimic my movement, including attacks, but cannot deal damage",
				"Lasts 10 minutes until I lose conc, Illusion HP reduced to 0, or dismissed as a action",
				"When a creature targets me with an attack/spell and my illusion is within 5ft,",
				"    it must make a Intelligence Save, targeting my illusion on a failure.",
				"Number of Illusions increases at 6th(2); 10th(3); 14th(4)"
				]),
				usages : "Charisma mod per ",
				usagescalc : "event.value = Math.max(1, tDoc.getField(\"Cha Mod\").value);",
				recovery : "long rest",
				action : ["action", ""]
			},
			"subclassfeature6" : {
				name : "Improved Illusions",
				source : ["HB", 5],
				minlevel : 10,
				description : desc([
				"While I have at least one of my illusions, I can use the following options",
				"*Illusion Strike* I may spend 2 energy points to melee attack or cast a spell",
				"    as though I were in the illusion's space. I must use my own senses.",
				"*Mirror Image* As a bonus action, spend 3 energy points and create a new illusion", 
				"    within 30 ft of me.  Maximum number of illusions determined by Conjure Illusions",
				"*Phantasmal Swap* As a reaction when I am hit by an attack or targeted by a spell",
				"    I can spend 3 energy points to swap positions with an illusion within 10ft",
				"    I can use this feature twice before I finish a short or long rest",
				"*Shatter* As a bonus action, I can destroy one of my illusions.",
				"    All creatures within 5 ft of the illusion must make a Dexterity Save.",
				"    On a failed save, it takes force damage of 1d10+Cha Mod; save halves.",
				"    I can spend up to 6 energy points to increase the damage by 1d10 every 2 points"
				]),
			},
			"subclassfeature14" : {
				name : "Perfect Illusions",
				source : ["HB", 5],
				minlevel : 14,
				description : desc([
				"Creatures have disadvantage on attack rolls and spell attacks against myself",
				"     or my illusion, when I am within 5ft from the conjured illusion of myself"
				]),
			},
		}
	}
);

AddSubClass(
	"mesmer",
	"illusion magic", // DONE
	{ 
		regExpSearch : /^(?=.*mesmer)(?=.*illusion).*$/i,
		subname : "Illusion Mesmer",
		source : ["HB", 6],
		fullname : "Illusion Mesmer",
		features : {
			"subclassfeature1.1" : {
				name : "Imagined Burden",
				source : ["HB", 6],
				minlevel : 1,
				description : desc([
				"When a creature within 60 ft of me moves or takes an action, I may spend a reaction", 
				"     to reduce its' speed by half and the creature can't take reactions for a # of rnds",
				"     equal to half your Charisma modifier(rounded up)"
				]),
				usages : [1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				recovery : "short rest",
				action : ["reaction", ""]
			},
			"subclassfeature6" : {
				name : "Distortion",
				source : ["HB", 6],
				minlevel : 6,
				description : desc([
				"As a reaction when taking damage, I can halve that damage.",
				"I can use this feature twice before needing to finish a short/long rest."
				]),
				usages : [0, 0, 0, 0, 0, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2],
				recovery : "short rest",
				action : ["reaction", ""]			
			},
			"subclassfeature10" : {
				name : "Illusionary Condition",
				source : ["HB", 6],
				minlevel : 10,
				description : desc([
				"When I use a spell on a creature within 60 ft, it must make a Wisdom Save.",
				"On a fail, creature is blinded or deafened(choice) and may only use a bonus action",
				"     or an action on each of its turns for a # of rnds equal to half my Charisma Mod."
				]),
				usages : "Charisma mod per ",
				usagescalc : "event.value = Math.max(1, tDoc.getField(\"Cha Mod\").value);",
				recovery : "short rest",
			},
			"subclassfeature14" : {
				name : "Phantom Pain",
				source : ["HB", 6],
				minlevel : 14,
				description : desc([
				"As a bonus action, Creature within 60 ft of me makes a Charisma Save.",
				"On a fail, Creature takes 1d6 Force dmg at the beginning of each of its turns.",
				"    Any healing effect on the creature is reduced by half for 1 minute",
				"Creature can make another Charisma Save at the end of each of its turns.",
				"    Two or more creatures can not be affected at the same time."
				]),
				action : ["bonus action", ""]	
			},
		}
	}
);

AddSubClass(
	"mesmer",
	"inspiration magic", // DONE
	{ 
		regExpSearch : /^(?=.*mesmer)(?=.*inspiration).*$/i,
		subname : "Inspiration Mesmer",
		source : ["HB", 6],
		fullname : "Inspiration Mesmer",
		features : {
			"subclassfeature1.1" : {
				name : "Mantra of Protection",
				source : ["HB", 6],
				minlevel : 1,
				description : desc([
				"I gain proficiency with another saving throw of my choice. This is permanent.", 
				"I learn the Absorb Elements spell, which is always prepared and doesn't",
				"     count against the number of spells I prepare each day"
				]),
				spellcastingExtra : ["absorb elements"],
				extraname : "Mantra of Protection",
				extrachoices : ["Mantra of Protection (Strength)", "Mantra of Protection (Constitution)", "Mantra of Protection (Intelligence)", "Mantra of Protection (Wisdom)"],
				"mantra of protection (strength)" : {
					name : "Mantra of Protection (Strength)",
					description : "\n   " + "I gain proficiency in Strength Saving Throws",
					saves : ["Str"]
				},
				"mantra of protection (constitution)" : {
					name : "Mantra of Protection (Constitution)",
					description : "\n   " + "I gain proficiency in Constitution Saving Throws",
					saves : ["Con"]
				},
				"mantra of protection (intelligence)" : {
					name : "Mantra of Protection (Intelligence)",
					description : "\n   " + "I gain proficiency in Intelligence Saving Throws",
					saves : ["Int"]
				},
				"mantra of protection (wisdom)" : {
					name : "Mantra of Protection (Wisdom)",
					description : "\n   " + "I gain proficiency in Wisdom Saving Throws",
					saves : ["Wis"]
				},
			},
			"subclassfeature6" : {
				name : "Channeling",
				source : ["HB", 6],
				minlevel : 6,
				description : desc([
				"When I cast a spell, I can use my reaction to spend up to two Mesmer Hit Dice.",
				"I recover 1d8 energy points per Hit Dice spent."
				]),
				usages : [0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1],
				recovery : "long rest",
				action : ["action", ""]			
			},
			"subclassfeature10" : {
				name : "Mantra of Restoration",
				source : ["HB", 6],
				minlevel : 10,
				description : desc([
				"I recover 1 Energy Point each time I cast a 1st level spell or higher."
				]),
			},
			"subclassfeature14" : {
				name : "Mantra of Expel",
				source : ["HB", 6],
				minlevel : 14,
				description : desc([
				"As a reaction, I spend 3 energy points to gain advantage on a save against a spell.",
				"I take half damage on a fail, and no damage on a success."
				]),
				action : ["reaction", ""]	
			},
		}
	}
);

UpdateDropdown("armour");