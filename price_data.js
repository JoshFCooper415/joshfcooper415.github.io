const priceData = {
    'Weapons & Military Equipment': {
        'A. Melee Weapons': {
            'Arming Sword': {
                'Poor': '1 Moon', 'Common': '3 Moons', 'Good': '8 Moons', 'Fine': '2 Suns', 'Superior': '5 Suns', 'Luxury': '12 Suns'
            },
            'Bastard Sword': {
                'Poor': '2 Moons', 'Common': '5 Moons', 'Good': '1 Sun', 'Fine': '3 Suns', 'Superior': '8 Suns', 'Luxury': '20 Suns'
            },
            'Battle Axe': {
                'Poor': '8 Terras', 'Common': '2 Moons', 'Good': '5 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'Claymore': {
                'Poor': '3 Moons', 'Common': '8 Moons', 'Good': '2 Suns', 'Fine': '5 Suns', 'Superior': '12 Suns', 'Luxury': '30 Suns'
            },
            'Dagger (Basic)': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Dagger (Fighting)': {
                'Poor': '6 Terras', 'Common': '1 Moon', 'Good': '3 Moons', 'Fine': '8 Moons', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Falchion': {
                'Poor': '1 Moon', 'Common': '3 Moons', 'Good': '6 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'Flail': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '5 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'Glaive': {
                'Poor': '1 Moon', 'Common': '3 Moons', 'Good': '6 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'Great Axe': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '5 Suns', 'Luxury': '12 Suns'
            },
            'Halberd': {
                'Poor': '2 Moons', 'Common': '5 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '5 Suns', 'Luxury': '12 Suns'
            },
            'Hand Axe': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Knife (Kitchen)': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '5 Moons', 'Luxury': '1 Sun'
            },
            'Lance': {
                'Poor': '1 Moon', 'Common': '3 Moons', 'Good': '6 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'Long Sword': {
                'Poor': '2 Moons', 'Common': '5 Moons', 'Good': '1 Sun', 'Fine': '3 Suns', 'Superior': '8 Suns', 'Luxury': '20 Suns'
            },
            'Mace': {
                'Poor': '8 Terras', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Morning Star': {
                'Poor': '1 Moon', 'Common': '3 Moons', 'Good': '6 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'Pike': {
                'Poor': '8 Terras', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Poleaxe': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '2 Suns', 'Superior': '5 Suns', 'Luxury': '12 Suns'
            },
            'Quarterstaff': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '5 Moons', 'Luxury': '1 Sun'
            },
            'Rapier': {
                'Poor': '2 Moons', 'Common': '5 Moons', 'Good': '1 Sun', 'Fine': '3 Suns', 'Superior': '8 Suns', 'Luxury': '20 Suns'
            },
            'Scimitar': {
                'Poor': '2 Moons', 'Common': '5 Moons', 'Good': '1 Sun', 'Fine': '3 Suns', 'Superior': '8 Suns', 'Luxury': '20 Suns'
            },
            'Short Sword': {
                'Poor': '8 Terras', 'Common': '2 Moons', 'Good': '5 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'Spear': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'War Hammer': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '5 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'War Pick': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '5 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'Club': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras'
            },
            'Great Club': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras'
            },
            'Great Sword': {
                'Poor': '8 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '15 Suns'
            },
        },
        'B. Ranged Weapons': {
            'Arbalest': {
                'Common': '3 Suns', 'Good': '6 Suns', 'Fine': '12 Suns', 'Superior': '25 Suns', 'Luxury': '60 Suns'
            },
            'Arrows (20)': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '1 Sun'
            },
            'Bodkin Arrows (20)': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Broadhead Arrows (20)': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Crossbow (Hand)': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
            'Crossbow (Light)': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Crossbow Bolts (20)': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Hunting Bow': {
                'Poor': '8 Terras', 'Common': '2 Moons', 'Good': '5 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'Longbow': {
                'Poor': '2 Moons', 'Common': '5 Moons', 'Good': '1 Sun', 'Fine': '3 Suns', 'Superior': '8 Suns', 'Luxury': '20 Suns'
            },
            'Quiver': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Short Bow': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '5 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'Sling': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '1 Moon', 'Superior': '2 Moons', 'Luxury': '5 Moons'
            },
            'Sling Bullets (20)': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '8 Terras', 'Superior': '2 Moons', 'Luxury': '5 Moons'
            },
        },
        'C. Siege Weapons and Equipment': {
            'Ballista': {
                'Common': '50 Suns', 'Good': '100 Suns', 'Fine': '200 Suns', 'Superior': '400 Suns', 'Luxury': '800 Suns'
            },
            'Battering Ram': {
                'Poor': '5 Suns', 'Common': '10 Suns', 'Good': '20 Suns', 'Fine': '40 Suns', 'Superior': '80 Suns'
            },
            'Catapult': {
                'Common': '75 Suns', 'Good': '150 Suns', 'Fine': '300 Suns', 'Superior': '600 Suns', 'Luxury': '1200 Suns'
            },
            'Mangonel': {
                'Common': '60 Suns', 'Good': '120 Suns', 'Fine': '240 Suns', 'Superior': '480 Suns', 'Luxury': '960 Suns'
            },
            'Scaling Ladder': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns'
            },
            'Siege Tower': {
                'Common': '100 Suns', 'Good': '200 Suns', 'Fine': '400 Suns', 'Superior': '800 Suns', 'Luxury': '1600 Suns'
            },
            'Trebuchet': {
                'Common': '150 Suns', 'Good': '300 Suns', 'Fine': '600 Suns', 'Superior': '1200 Suns', 'Luxury': '2400 Suns'
            },
        },
        'D. Military Tools and Supplies': {
            'Banner': {
                'Poor': '2 Moons', 'Common': '5 Moons', 'Good': '1 Sun', 'Fine': '3 Suns', 'Superior': '8 Suns', 'Luxury': '20 Suns'
            },
            'Caltrops (bag)': {
                'Poor': '5 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun'
            },
            'Horn': {
                'Poor': '5 Terras', 'Common': '1 Moon', 'Good': '3 Moons', 'Fine': '8 Moons', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Military Pick': {
                'Poor': '8 Terras', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Siege Hook': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun'
            },
            'War Drum': {
                'Poor': '1 Moon', 'Common': '3 Moons', 'Good': '8 Moons', 'Fine': '2 Suns', 'Superior': '5 Suns', 'Luxury': '12 Suns'
            },
            'War Tent': {
                'Poor': '3 Moons', 'Common': '8 Moons', 'Good': '2 Suns', 'Fine': '5 Suns', 'Superior': '12 Suns', 'Luxury': '30 Suns'
            },
        },
    },
    'Armor & Protective Gear': {
        'A. Body Armor': {
            'Brigandine': {
                'Poor': '3 Suns', 'Common': '6 Suns', 'Good': '12 Suns', 'Fine': '25 Suns', 'Superior': '50 Suns', 'Luxury': '100 Suns'
            },
            'Chain Barding': {
                'Common': '20 Suns', 'Good': '40 Suns', 'Fine': '80 Suns', 'Superior': '160 Suns', 'Luxury': '320 Suns'
            },
            'Chain Coif': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Chain Hauberk': {
                'Poor': '5 Suns', 'Common': '10 Suns', 'Good': '20 Suns', 'Fine': '40 Suns', 'Superior': '80 Suns', 'Luxury': '160 Suns'
            },
            'Chain Leggings': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
            'Chain Shirt': {
                'Poor': '3 Suns', 'Common': '6 Suns', 'Good': '12 Suns', 'Fine': '25 Suns', 'Superior': '50 Suns', 'Luxury': '100 Suns'
            },
            'Cuirbouilli': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Full Plate': {
                'Common': '50 Suns', 'Good': '100 Suns', 'Fine': '200 Suns', 'Superior': '400 Suns', 'Luxury': '800 Suns'
            },
            'Gambeson': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '15 Suns'
            },
            'Gothic Plate': {
                'Common': '75 Suns', 'Good': '150 Suns', 'Fine': '300 Suns', 'Superior': '600 Suns', 'Luxury': '1200 Suns'
            },
            'Jack of Plates': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
            'Lamellar': {
                'Poor': '4 Suns', 'Common': '8 Suns', 'Good': '15 Suns', 'Fine': '30 Suns', 'Superior': '60 Suns', 'Luxury': '120 Suns'
            },
            'Leather Armor': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Plate Barding': {
                'Common': '40 Suns', 'Good': '80 Suns', 'Fine': '160 Suns', 'Superior': '320 Suns', 'Luxury': '640 Suns'
            },
            'Scale Mail': {
                'Poor': '4 Suns', 'Common': '8 Suns', 'Good': '15 Suns', 'Fine': '30 Suns', 'Superior': '60 Suns', 'Luxury': '120 Suns'
            },
            'Studded Leather': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
        },
        'B. Helmets': {
            'Armet': {
                'Common': '3 Suns', 'Good': '6 Suns', 'Fine': '12 Suns', 'Superior': '25 Suns', 'Luxury': '50 Suns'
            },
            'Bascinet': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Great Helm': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
            'Kettle Hat': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '15 Suns'
            },
            'Leather Cap': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Mail Coif': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Sallet': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Visored Bascinet': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
        },
        'C. Shields': {
            'Buckler': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '15 Suns'
            },
            'Heater Shield': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Kite Shield': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Pavise': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
            'Round Shield': {
                'Poor': '8 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '15 Suns'
            },
            'Target': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '15 Suns'
            },
            'Tower Shield': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
        },
        'D. Armor Accessories and Maintenance': {
            'Armor Stand': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Arming Cap': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Arming Doublet': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Armor Oil (bottle)': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '1 Sun'
            },
            'Belt and Frog': {
                'Poor': '3 Moons', 'Common': '6 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '8 Suns'
            },
            'Cleaning Kit': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '15 Suns'
            },
            'Gauntlets': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Greaves': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Padding Set': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '15 Suns'
            },
            'Plume/Crest': {
                'Poor': '3 Moons', 'Common': '6 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '8 Suns'
            },
            'Repair Kit': {
                'Poor': '8 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '15 Suns'
            },
            'Sword Belt': {
                'Poor': '4 Moons', 'Common': '8 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '8 Suns'
            },
        },
    },
    'Tools & Professional Equipment': {
        'A. Blacksmith\'s Tools': {
            'Anvil': {
                'Common': '5 Suns', 'Good': '10 Suns', 'Fine': '20 Suns', 'Superior': '40 Suns', 'Luxury': '80 Suns'
            },
            'Bellows': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Forge': {
                'Poor': '3 Suns', 'Common': '6 Suns', 'Good': '12 Suns', 'Fine': '25 Suns', 'Superior': '50 Suns', 'Luxury': '100 Suns'
            },
            'Hammers (Various)': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Metal Files': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '5 Moons', 'Luxury': '1 Sun'
            },
            'Metal Tongs': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Quenching Tub': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '5 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Small Biciron': {
                'Poor': '8 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '15 Suns'
            },
            'Water Barrel': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
        },
        'B. Carpenter\'s Tools': {
            'Adze': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Auger': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Axe (Wood)': {
                'Poor': '5 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Chisels (Set)': {
                'Poor': '8 Terras', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Draw Knife': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Hand Saw': {
                'Poor': '6 Terras', 'Common': '1 Moon', 'Good': '3 Moons', 'Fine': '8 Moons', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Mallet': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '5 Moons', 'Luxury': '1 Sun'
            },
            'Plane': {
                'Poor': '8 Terras', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Square': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Workbench': {
                'Poor': '2 Moons', 'Common': '5 Moons', 'Good': '1 Sun', 'Fine': '3 Suns', 'Superior': '8 Suns', 'Luxury': '20 Suns'
            },
        },
        'C. Mason\'s Tools': {
            'Chisel Set': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '5 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'Level': {
                'Poor': '6 Terras', 'Common': '1 Moon', 'Good': '3 Moons', 'Fine': '8 Moons', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Mason\'s Hammer': {
                'Poor': '5 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Measuring Rod': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Plumb Line': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '5 Moons', 'Luxury': '1 Sun'
            },
            'Pointing Tools': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Stone Saw': {
                'Poor': '1 Moon', 'Common': '3 Moons', 'Good': '6 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'Trowels': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
        },
        'D. Farming Tools': {
            'Grain Flail': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons'
            },
            'Hoe': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun'
            },
            'Pitchfork': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun'
            },
            'Plough': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '5 Suns', 'Superior': '12 Suns'
            },
            'Rake': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '5 Moons'
            },
            'Scythe': {
                'Poor': '6 Terras', 'Common': '1 Moon', 'Good': '3 Moons', 'Fine': '8 Moons', 'Superior': '2 Suns'
            },
            'Sickle': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons'
            },
            'Spade': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons'
            },
            'Winnowing Fan': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun'
            },
            'Yoke': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '2 Suns', 'Superior': '5 Suns'
            },
        },
        'E. Medical Tools': {
            'Bandages (Roll)': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '1 Moon', 'Superior': '2 Moons', 'Luxury': '5 Moons'
            },
            'Bleeding Cups': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '2 Suns', 'Superior': '5 Suns', 'Luxury': '12 Suns'
            },
            'Bone Saw': {
                'Poor': '1 Moon', 'Common': '3 Moons', 'Good': '6 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'Cauterizing Iron': {
                'Poor': '5 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Forceps': {
                'Poor': '8 Terras', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Herbs (Common)': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '5 Moons', 'Luxury': '1 Sun'
            },
            'Lancet': {
                'Poor': '5 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Medicine Chest': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
            'Mortar & Pestle': {
                'Poor': '8 Terras', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Surgical Kit': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
        },
        'F. Artisan\'s Tools': {
            'Brewing Vat': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Glass Blower\'s Tools': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
            'Jeweler\'s Tools': {
                'Poor': '3 Suns', 'Common': '6 Suns', 'Good': '12 Suns', 'Fine': '25 Suns', 'Superior': '50 Suns', 'Luxury': '100 Suns'
            },
            'Leather Working Set': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Loom': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
            'Potter\'s Wheel': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Spinning Wheel': {
                'Poor': '10 Terras', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Tanning Tools': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Weaver\'s Tools': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
        },
        'G. Navigation & Scientific Equipment': {
            'Astrolabe': {
                'Common': '5 Suns', 'Good': '10 Suns', 'Fine': '20 Suns', 'Superior': '40 Suns', 'Luxury': '80 Suns'
            },
            'Compass': {
                'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Hour Glass': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Maps (Local)': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '15 Suns'
            },
            'Navigation Charts': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Quadrant': {
                'Common': '3 Suns', 'Good': '6 Suns', 'Fine': '12 Suns', 'Superior': '25 Suns', 'Luxury': '50 Suns'
            },
            'Sextant': {
                'Common': '8 Suns', 'Good': '15 Suns', 'Fine': '30 Suns', 'Superior': '60 Suns', 'Luxury': '120 Suns'
            },
            'Spyglass': {
                'Common': '25 Suns', 'Good': '50 Suns', 'Fine': '100 Suns', 'Superior': '200 Suns', 'Luxury': '400 Suns'
            },
            'Water Clock': {
                'Common': '10 Suns', 'Good': '20 Suns', 'Fine': '40 Suns', 'Superior': '80 Suns', 'Luxury': '160 Suns'
            },
        },
    },
    'Clothing & Textiles': {
        'A. Basic Clothing': {
            'Belt': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Braies (Underpants)': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Chemise': {
                'Poor': '8 Terras', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Cloak': {
                'Poor': '1 Moon', 'Common': '3 Moons', 'Good': '6 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'Dress (Simple)': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '5 Suns', 'Luxury': '12 Suns'
            },
            'Hood': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Hose (Pair)': {
                'Poor': '6 Terras', 'Common': '1 Moon', 'Good': '3 Moons', 'Fine': '8 Moons', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Shirt': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '5 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'Smock': {
                'Poor': '8 Terras', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Tunic': {
                'Poor': '3 Moons', 'Common': '6 Moons', 'Good': '1 Sun', 'Fine': '3 Suns', 'Superior': '8 Suns', 'Luxury': '20 Suns'
            },
        },
        'B. Fine Clothing': {
            'Cotehardie': {
                'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Court Dress': {
                'Common': '5 Suns', 'Good': '10 Suns', 'Fine': '20 Suns', 'Superior': '40 Suns', 'Luxury': '100 Suns'
            },
            'Doublet': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Fur-lined Cloak': {
                'Common': '3 Suns', 'Good': '6 Suns', 'Fine': '12 Suns', 'Superior': '25 Suns', 'Luxury': '50 Suns'
            },
            'Gown': {
                'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
            'Houppelande': {
                'Common': '3 Suns', 'Good': '6 Suns', 'Fine': '12 Suns', 'Superior': '25 Suns', 'Luxury': '50 Suns'
            },
            'Kirtle': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Mantle': {
                'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Silk Dress': {
                'Common': '5 Suns', 'Good': '10 Suns', 'Fine': '20 Suns', 'Superior': '40 Suns', 'Luxury': '80 Suns'
            },
            'Surcoat': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
        },
        'C. Footwear': {
            'Boots (Ankle)': {
                'Poor': '6 Terras', 'Common': '1 Moon', 'Good': '3 Moons', 'Fine': '8 Moons', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Boots (Riding)': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '5 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'Pattens': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Shoes (Basic)': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Shoes (Fine)': {
                'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Slippers': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
        },
        'D. Fabrics (per yard)': {
            'Broadcloth': {
                'Poor': '8 Terras', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Burlap': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras'
            },
            'Canvas': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons'
            },
            'Cotton': {
                'Poor': '5 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Damask': {
                'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Felt': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun'
            },
            'Linen (Common)': {
                'Poor': '6 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Linen (Fine)': {
                'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Silk': {
                'Common': '10 Moons', 'Good': '1 Sun', 'Fine': '3 Suns', 'Superior': '6 Suns', 'Luxury': '15 Suns'
            },
            'Velvet': {
                'Common': '3 Suns', 'Good': '6 Suns', 'Fine': '12 Suns', 'Superior': '25 Suns', 'Luxury': '50 Suns'
            },
            'Wool (Common)': {
                'Poor': '8 Terras', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Wool (Fine)': {
                'Common': '5 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '10 Suns'
            },
        },
        'E. Accessories': {
            'Belt Pouch': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Brooch (Metal)': {
                'Poor': '2 Terras', 'Common': '5 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Buttons (12)': {
                'Poor': '1 Terra', 'Common': '3 Terras', 'Good': '6 Terras', 'Fine': '2 Moons', 'Superior': '5 Moons', 'Luxury': '1 Sun'
            },
            'Gloves (Cloth)': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Gloves (Leather)': {
                'Poor': '8 Terras', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Hat (Simple)': {
                'Poor': '5 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Hat (Fine)': {
                'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Purse': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Scarf': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Veil': {
                'Poor': '6 Terras', 'Common': '1 Moon', 'Good': '3 Moons', 'Fine': '8 Moons', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
        },
    },
    'Household Items': {
        'A. Furniture': {
            'Bed (Simple)': {
                'Poor': '2 Moons', 'Common': '5 Moons', 'Good': '1 Sun', 'Fine': '3 Suns', 'Superior': '8 Suns', 'Luxury': '20 Suns'
            },
            'Bed (Full)': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '3 Suns', 'Fine': '8 Suns', 'Superior': '20 Suns', 'Luxury': '50 Suns'
            },
            'Bench': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Chair': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Chest': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '5 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'Cupboard': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '5 Suns', 'Luxury': '12 Suns'
            },
            'Table (Small)': {
                'Poor': '6 Terras', 'Common': '1 Moon', 'Good': '3 Moons', 'Fine': '8 Moons', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Table (Large)': {
                'Poor': '1 Moon', 'Common': '3 Moons', 'Good': '6 Moons', 'Fine': '1 Sun', 'Superior': '3 Suns', 'Luxury': '8 Suns'
            },
            'Stool': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '5 Moons', 'Luxury': '1 Sun'
            },
            'Wardrobe': {
                'Poor': '3 Moons', 'Common': '6 Moons', 'Good': '1 Sun', 'Fine': '3 Suns', 'Superior': '8 Suns', 'Luxury': '20 Suns'
            },
        },
        'B. Bedding and Linens': {
            'Blanket': {
                'Poor': '5 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Featherbed': {
                'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '5 Suns', 'Superior': '12 Suns', 'Luxury': '30 Suns'
            },
            'Mattress (Straw)': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras'
            },
            'Pillow': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Sheet': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '5 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Table Cloth': {
                'Poor': '6 Terras', 'Common': '1 Moon', 'Good': '3 Moons', 'Fine': '8 Moons', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Towel': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
        },
    },
    'Religious Items': {
        'A. Church Equipment': {
            'Altar Cloth': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '5 Suns', 'Fine': '12 Suns', 'Superior': '25 Suns', 'Luxury': '50 Suns'
            },
            'Censer': {
                'Poor': '2 Moons', 'Common': '5 Moons', 'Good': '1 Sun', 'Fine': '3 Suns', 'Superior': '8 Suns', 'Luxury': '20 Suns'
            },
            'Chalice': {
                'Poor': '1 Sun', 'Common': '3 Suns', 'Good': '8 Suns', 'Fine': '20 Suns', 'Superior': '50 Suns', 'Luxury': '120 Suns'
            },
            'Holy Water Font': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '3 Suns', 'Fine': '8 Suns', 'Superior': '20 Suns', 'Luxury': '50 Suns'
            },
            'Paten': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '3 Suns', 'Fine': '8 Suns', 'Superior': '20 Suns', 'Luxury': '50 Suns'
            },
            'Reliquary': {
                'Common': '5 Suns', 'Good': '15 Suns', 'Fine': '40 Suns', 'Superior': '100 Suns', 'Luxury': '300 Suns'
            },
            'Thurible': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '5 Suns', 'Fine': '12 Suns', 'Superior': '30 Suns', 'Luxury': '80 Suns'
            },
        },
        'B. Personal Religious Items': {
            'Amulet': {
                'Poor': '2 Terras', 'Common': '5 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '1 Sun', 'Luxury': '3 Suns'
            },
            'Holy Symbol': {
                'Poor': '5 Terras', 'Common': '1 Moon', 'Good': '3 Moons', 'Fine': '8 Moons', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Prayer Book': {
                'Poor': '1 Sun', 'Common': '3 Suns', 'Good': '8 Suns', 'Fine': '20 Suns', 'Superior': '50 Suns', 'Luxury': '120 Suns'
            },
            'Religious Icon': {
                'Poor': '1 Moon', 'Common': '3 Moons', 'Good': '8 Moons', 'Fine': '2 Suns', 'Superior': '5 Suns', 'Luxury': '15 Suns'
            },
        },
    },
    'Food and Consumables': {
        'A. Basic Foodstuffs (per pound unless noted)': {
            'Barley': {
                'Poor': '1 Terra', 'Common': '2 Terras'
            },
            'Beans': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras'
            },
            'Bread': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '8 Terras', 'Superior': '2 Moons'
            },
            'Cheese': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '1 Sun'
            },
            'Eggs (dozen)': {
                'Poor': '2 Terras', 'Common': '3 Terras', 'Good': '6 Terras', 'Fine': '1 Moon'
            },
            'Flour': {
                'Poor': '2 Terras', 'Common': '3 Terras', 'Good': '6 Terras', 'Fine': '1 Moon'
            },
            'Oats': {
                'Poor': '1 Terra', 'Common': '2 Terras'
            },
            'Peas (dried)': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras'
            },
            'Salt': {
                'Poor': '5 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons'
            },
            'Wheat': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras'
            },
            'Sweet spine': {
                'Common': '1 Moon', 'Good': '1 Sun', 'Fine': '2 Suns'
            },
        },
        'B. Meats (per pound)': {
            'Bacon': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '2 Moons'
            },
            'Beef': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '1 Sun'
            },
            'Chicken (whole)': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons'
            },
            'Fish (dried)': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons'
            },
            'Fish (fresh)': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '6 Moons', 'Luxury': '1 Sun'
            },
            'Goose': {
                'Poor': '6 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons'
            },
            'Mutton': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons'
            },
            'Pork': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '8 Moons'
            },
            'Venison': {
                'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
        },
        'C. Beverages (per gallon)': {
            'Ale': {
                'Poor': '8 Bits', 'Common': '1 Terra', 'Good': '2 Terras', 'Fine': '4 Terras', 'Superior': '8 Terras'
            },
            'Beer': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '8 Terras', 'Superior': '2 Moons'
            },
            'Cider': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons'
            },
            'Mead': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Milk': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras'
            },
            'Wine (Common)': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '1 Sun'
            },
            'Wine (Good)': {
                'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
        },
        'D. Spices and Seasonings (per ounce)': {
            'Black Pepper': {
                'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Cinnamon': {
                'Common': '3 Moons', 'Good': '6 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
            'Cloves': {
                'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '8 Suns'
            },
            'Garlic (lb)': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras'
            },
            'Ginger': {
                'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Mace': {
                'Common': '3 Moons', 'Good': '6 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
            'Mustard (lb)': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons'
            },
            'Nutmeg': {
                'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '8 Suns'
            },
            'Salt (lb)': {
                'Poor': '5 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons'
            },
            'Saffron (per ounce)': {
                'Common': '8 Moons', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '15 Suns'
            },
            'Coffee Beans': {
                'Common': '3 Moons', 'Good': '6 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
            'Tea Leaves': {
                'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '8 Suns'
            },
        },
        'E. Preserved Foods (per pound)': {
            'Almonds': {
                'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Dates': {
                'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Dried Fish': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons'
            },
            'Dried Fruit': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Figs': {
                'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Honey': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '8 Moons'
            },
            'Pickled Fish': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '2 Moons', 'Superior': '4 Moons'
            },
            'Prunes': {
                'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons', 'Luxury': '1 Sun'
            },
            'Raisins': {
                'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Salted Beef': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '2 Moons', 'Superior': '4 Moons'
            },
            'Salted Herring': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons'
            },
            'Salted Pork': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '2 Moons', 'Superior': '4 Moons'
            },
            'Trail Rations (1 day)': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras'
            },
        },
        'F. Sweets and Luxuries (per pound)': {
            'Candied Fruit': {
                'Common': '3 Moons', 'Good': '6 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
            'Honey Cakes': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '8 Moons'
            },
            'Marchpane': {
                'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '8 Suns'
            },
            'Rice': {
                'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Sugar': {
                'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '8 Suns'
            },
            'Wafers': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '8 Terras', 'Superior': '2 Moons', 'Luxury': '4 Moons'
            },
        },
        'G. Oils and Condiments (per pint)': {
            'Fish Sauce': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons'
            },
            'Lamp Oil': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons'
            },
            'Olive Oil': {
                'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Vinegar': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '8 Terras', 'Superior': '2 Moons'
            },
            'Wine Vinegar': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '8 Moons'
            },
        },
    },
    'Buildings and Construction': {
        'A. Complete Buildings': {
            'Barn (Large)': {
                'Poor': '40 Suns', 'Common': '80 Suns', 'Good': '160 Suns'
            },
            'Cottage (1 bay)': {
                'Poor': '40 Moons', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns'
            },
            'Craftsman\'s House': {
                'Poor': '10 Suns', 'Common': '15 Suns', 'Good': '25 Suns', 'Fine': '40 Suns', 'Superior': '60 Suns'
            },
            'Gatehouse (Wood)': {
                'Poor': '5 Suns', 'Common': '10 Suns', 'Good': '16 Suns'
            },
            'Gatehouse (Stone)': {
                'Poor': '20 Suns', 'Common': '30 Suns', 'Good': '40 Suns', 'Fine': '60 Suns'
            },
            'Great Hall': {
                'Poor': '100 Suns', 'Common': '200 Suns', 'Good': '400 Suns', 'Fine': '800 Suns', 'Superior': '1500 Suns', 'Luxury': '3000 Suns'
            },
            'Manor House': {
                'Poor': '100 Suns', 'Common': '200 Suns', 'Good': '400 Suns', 'Fine': '800 Suns', 'Superior': '1500 Suns', 'Luxury': '3000 Suns'
            },
            'Merchant\'s House': {
                'Poor': '30 Suns', 'Common': '50 Suns', 'Good': '80 Suns', 'Fine': '120 Suns', 'Superior': '200 Suns', 'Luxury': '400 Suns'
            },
            'Row House': {
                'Poor': '3 Suns', 'Common': '5 Suns', 'Good': '8 Suns', 'Fine': '12 Suns'
            },
            'Shop': {
                'Poor': '5 Suns', 'Common': '10 Suns', 'Good': '20 Suns', 'Fine': '40 Suns', 'Superior': '80 Suns'
            },
            'Stone Church': {
                'Poor': '100 Suns', 'Common': '200 Suns', 'Good': '400 Suns', 'Fine': '800 Suns', 'Superior': '1500 Suns', 'Luxury': '3000 Suns'
            },
            'Tower (Castle)': {
                'Poor': '300 Suns', 'Common': '400 Suns', 'Good': '600 Suns', 'Fine': '800 Suns', 'Superior': '1200 Suns', 'Luxury': '2000 Suns'
            },
            'Warehouse': {
                'Poor': '20 Suns', 'Common': '40 Suns', 'Good': '80 Suns', 'Fine': '150 Suns', 'Superior': '300 Suns'
            },
        },
        'B. Construction Materials': {
            'Bricks (1000)': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns'
            },
            'Glass (per window)': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '20 Suns'
            },
            'Iron Nails (100)': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons'
            },
            'Lime (barrel)': {
                'Poor': '3 Moons', 'Common': '6 Moons', 'Good': '1 Sun'
            },
            'Lumber (per beam)': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
            'Plaster (barrel)': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons'
            },
            'Roof Tiles (100)': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns'
            },
            'Stone (cart load)': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns'
            },
            'Straw (thatch load)': {
                'Poor': '2 Moons', 'Common': '4 Moons'
            },
            'Timber (per tree)': {
                'Poor': '3 Moons', 'Common': '6 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '8 Suns'
            },
        },
        'C. Building Components': {
            'Door (Simple)': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '15 Suns'
            },
            'Door (Reinforced)': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
            'Fireplace': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
            'Floor (per 100 sq ft)': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Shutters (pair)': {
                'Poor': '3 Moons', 'Common': '6 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '8 Suns'
            },
            'Stairs (wooden)': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Stone Steps': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
            'Window Frame': {
                'Poor': '4 Moons', 'Common': '8 Moons', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '15 Suns'
            },
        },
        'D. Annual Rents': {
            'Cottage': {
                'Poor': '5 Moons', 'Common': '8 Moons', 'Good': '12 Moons'
            },
            'Craftsman\'s House': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '3 Suns', 'Fine': '4 Suns'
            },
            'Market Stall': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns'
            },
            'Merchant\'s House': {
                'Poor': '2 Suns', 'Common': '3 Suns', 'Good': '5 Suns', 'Fine': '8 Suns', 'Superior': '12 Suns', 'Luxury': '20 Suns'
            },
            'Shop': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns'
            },
            'Warehouse': {
                'Poor': '3 Suns', 'Common': '6 Suns', 'Good': '12 Suns', 'Fine': '24 Suns', 'Superior': '48 Suns'
            },
        },
        'E. Labor Costs (per day)': {
            'Apprentice': {
                'Poor': '2 Terras', 'Common': '3 Terras'
            },
            'Carpenter': {
                'Poor': '3 Terras', 'Common': '4 Terras', 'Good': '6 Terras', 'Fine': '8 Terras'
            },
            'Laborer': {
                'Poor': '2 Terras', 'Common': '3 Terras', 'Good': '4 Terras'
            },
            'Mason': {
                'Poor': '4 Terras', 'Common': '6 Terras', 'Good': '8 Terras', 'Fine': '1 Moon'
            },
            'Master Builder': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '3 Moons', 'Fine': '4 Moons', 'Superior': '5 Moons'
            },
            'Thatcher': {
                'Poor': '4 Terras', 'Common': '6 Terras', 'Good': '8 Terras', 'Fine': '1 Moon'
            },
        },
        'F. Land Costs': {
            'City Center': {
                'Poor': '100 Suns', 'Common': '200 Suns', 'Good': '400 Suns', 'Fine': '800 Suns', 'Superior': '1500 Suns', 'Luxury': '3000 Suns'
            },
            'City Wall Adjacent': {
                'Poor': '50 Suns', 'Common': '100 Suns', 'Good': '200 Suns', 'Fine': '400 Suns', 'Superior': '800 Suns', 'Luxury': '1500 Suns'
            },
            'Commercial District': {
                'Poor': '80 Suns', 'Common': '150 Suns', 'Good': '300 Suns', 'Fine': '600 Suns', 'Superior': '1200 Suns', 'Luxury': '2400 Suns'
            },
            'Craft District': {
                'Poor': '40 Suns', 'Common': '80 Suns', 'Good': '160 Suns', 'Fine': '320 Suns', 'Superior': '600 Suns', 'Luxury': '1200 Suns'
            },
            'Outer City': {
                'Poor': '20 Suns', 'Common': '40 Suns', 'Good': '80 Suns', 'Fine': '160 Suns', 'Superior': '320 Suns', 'Luxury': '600 Suns'
            },
            'Slums': {
                'Poor': '5 Suns', 'Common': '10 Suns', 'Good': '20 Suns'
            },
            'Waterfront': {
                'Poor': '60 Suns', 'Common': '120 Suns', 'Good': '240 Suns', 'Fine': '480 Suns', 'Superior': '960 Suns', 'Luxury': '2000 Suns'
            },
            'Arable Land': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns'
            },
            'Forest': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Grazing Land': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns'
            },
            'Manor Estate': {
                'Common': '10 Suns', 'Good': '20 Suns', 'Fine': '40 Suns', 'Superior': '80 Suns', 'Luxury': '160 Suns'
            },
            'Marsh/Wetland': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns'
            },
            'Orchard': {
                'Poor': '5 Suns', 'Common': '10 Suns', 'Good': '20 Suns', 'Fine': '40 Suns', 'Superior': '80 Suns', 'Luxury': '160 Suns'
            },
            'Vineyard': {
                'Poor': '8 Suns', 'Common': '15 Suns', 'Good': '30 Suns', 'Fine': '60 Suns', 'Superior': '120 Suns', 'Luxury': '240 Suns'
            },
            'Wasteland': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons'
            },
            'Fishing Rights': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Grazing Rights': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns'
            },
            'Hunting Rights': {
                'Common': '5 Suns', 'Good': '10 Suns', 'Fine': '20 Suns', 'Superior': '40 Suns', 'Luxury': '80 Suns'
            },
            'Market Rights': {
                'Common': '10 Suns', 'Good': '20 Suns', 'Fine': '40 Suns', 'Superior': '80 Suns', 'Luxury': '160 Suns'
            },
            'Mill Rights': {
                'Common': '8 Suns', 'Good': '15 Suns', 'Fine': '30 Suns', 'Superior': '60 Suns', 'Luxury': '120 Suns'
            },
            'Mining Rights': {
                'Common': '5 Suns', 'Good': '10 Suns', 'Fine': '20 Suns', 'Superior': '40 Suns', 'Luxury': '80 Suns'
            },
            'Tithe Rights': {
                'Common': '15 Suns', 'Good': '30 Suns', 'Fine': '60 Suns', 'Superior': '120 Suns', 'Luxury': '240 Suns'
            },
            'Toll Rights': {
                'Common': '12 Suns', 'Good': '25 Suns', 'Fine': '50 Suns', 'Superior': '100 Suns', 'Luxury': '200 Suns'
            },
            'Castle Guard': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns'
            },
            'Corvée Labor': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns'
            },
            'Knight\'s Fee': {
                'Common': '20 Suns', 'Good': '40 Suns', 'Fine': '80 Suns', 'Superior': '160 Suns', 'Luxury': '320 Suns'
            },
            'Manor Service': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns'
            },
            'Market Tax': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Scutage': {
                'Common': '10 Suns', 'Good': '20 Suns', 'Fine': '40 Suns', 'Superior': '80 Suns', 'Luxury': '160 Suns'
            },
        },
    },
    'Animals and Livestock': {
        'A. Horses': {
            'Cart Horse': {
                'Poor': '8 Moons', 'Common': '15 Moons', 'Good': '1 Sun', 'Fine': '2 Suns'
            },
            'Courser': {
                'Common': '15 Suns', 'Good': '30 Suns', 'Fine': '60 Suns', 'Superior': '120 Suns', 'Luxury': '240 Suns'
            },
            'Destrier': {
                'Common': '40 Suns', 'Good': '80 Suns', 'Fine': '160 Suns', 'Superior': '320 Suns', 'Luxury': '800 Suns'
            },
            'Draft Horse': {
                'Poor': '10 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns'
            },
            'Palfrey': {
                'Common': '10 Suns', 'Good': '20 Suns', 'Fine': '40 Suns', 'Superior': '80 Suns', 'Luxury': '160 Suns'
            },
            'Plough Horse': {
                'Poor': '10 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns'
            },
            'Pony': {
                'Poor': '5 Moons', 'Common': '10 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '8 Suns'
            },
            'Riding Horse': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
            'Rouncey': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns'
            },
            'War Horse': {
                'Common': '20 Suns', 'Good': '40 Suns', 'Fine': '80 Suns', 'Superior': '160 Suns', 'Luxury': '400 Suns'
            },
        },
        'B. Farm Animals': {
            'Bull': {
                'Poor': '15 Moons', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Calf': {
                'Poor': '3 Moons', 'Common': '6 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '4 Suns'
            },
            'Chicken': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '8 Terras'
            },
            'Cow': {
                'Poor': '8 Moons', 'Common': '15 Moons', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns'
            },
            'Duck': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '8 Terras'
            },
            'Goat': {
                'Poor': '3 Moons', 'Common': '6 Moons', 'Good': '1 Sun', 'Fine': '2 Suns'
            },
            'Goose': {
                'Poor': '6 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '4 Moons'
            },
            'Ox': {
                'Poor': '13 Moons', 'Common': '2 Suns', 'Good': '3 Suns', 'Fine': '5 Suns', 'Superior': '8 Suns'
            },
            'Pig': {
                'Poor': '2 Moons', 'Common': '3 Moons', 'Good': '6 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns'
            },
            'Piglet': {
                'Poor': '6 Terras', 'Common': '1 Moon', 'Good': '2 Moons'
            },
            'Ram': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '1 Sun'
            },
            'Sheep': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons'
            },
        },
        'C. Working Animals': {
            'Donkey': {
                'Poor': '4 Moons', 'Common': '8 Moons', 'Good': '1 Sun', 'Fine': '2 Suns'
            },
            'Guard Dog': {
                'Poor': '1 Moon', 'Common': '3 Moons', 'Good': '6 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '5 Suns'
            },
            'Herding Dog': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns'
            },
            'Hunting Dog': {
                'Poor': '3 Moons', 'Common': '6 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '5 Suns', 'Luxury': '10 Suns'
            },
            'Lap Dog': {
                'Poor': '2 Moons', 'Common': '5 Moons', 'Good': '1 Sun', 'Fine': '3 Suns', 'Superior': '8 Suns', 'Luxury': '20 Suns'
            },
            'Mule': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns'
            },
            'Ox (Working)': {
                'Poor': '15 Moons', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns'
            },
        },
        'D. Exotic Animals': {
            'Camel': {
                'Common': '10 Suns', 'Good': '20 Suns', 'Fine': '40 Suns', 'Superior': '80 Suns', 'Luxury': '160 Suns'
            },
            'Elephant': {
                'Common': '100 Suns', 'Good': '200 Suns', 'Fine': '400 Suns', 'Superior': '800 Suns', 'Luxury': '1600 Suns'
            },
            'Falcon': {
                'Common': '5 Suns', 'Good': '10 Suns', 'Fine': '20 Suns', 'Superior': '40 Suns', 'Luxury': '80 Suns'
            },
            'Hawk': {
                'Common': '3 Suns', 'Good': '6 Suns', 'Fine': '12 Suns', 'Superior': '25 Suns', 'Luxury': '50 Suns'
            },
            'Lion': {
                'Common': '50 Suns', 'Good': '100 Suns', 'Fine': '200 Suns', 'Superior': '400 Suns', 'Luxury': '800 Suns'
            },
            'Monkey': {
                'Common': '8 Suns', 'Good': '15 Suns', 'Fine': '30 Suns', 'Superior': '60 Suns', 'Luxury': '120 Suns'
            },
            'Parrot': {
                'Common': '10 Suns', 'Good': '20 Suns', 'Fine': '40 Suns', 'Superior': '80 Suns', 'Luxury': '160 Suns'
            },
        },
        'E. Animal Care (annual)': {
            'Fodder (horse)': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
            'Grain Feed': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Grazing Rights': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns'
            },
            'Shoeing (horse)': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Stabling': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
            'Veterinary Care': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
        },
    },
    'Additional Fantasy Equipment and Items': {
        'A. Adventuring Gear': {
            'Abacus': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Alchemist\'s Fire (flask)': {
                'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Antitoxin (vial)': {
                'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Ball Bearings (bag of 1000)': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns'
            },
            'Block and Tackle': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns'
            },
            'Climber\'s Kit': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns'
            },
            'Component Pouch': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Healer\'s Kit': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
            'Holy Water (flask)': {
                'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '15 Suns'
            },
            'Hourglass': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Hunting Trap': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns'
            },
            'Magnifying Glass': {
                'Common': '5 Suns', 'Good': '10 Suns', 'Fine': '20 Suns', 'Superior': '40 Suns', 'Luxury': '80 Suns'
            },
            'Portable Ram': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns'
            },
            'Chalk (10 pieces)': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '8 Terras'
            },
            'String (50 feet)': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '8 Terras', 'Superior': '2 Moons'
            },
            'Twine (100 feet)': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons'
            },
            'Small Bells (3)': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '1 Sun'
            },
            'Flint and Steel': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '2 Moons', 'Superior': '4 Moons'
            },
            'Manacles': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Paint (pot)': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '8 Moons'
            },
            'Wax (block)': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '8 Moons'
            },
            'Chain (10 feet)': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Manacle Lock Pick': {
                'Common': '5 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '8 Suns'
            },
            'Grease/Oil (flask)': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons'
            },
            'Marking Stones': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '8 Terras'
            },
            'Metal File': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Signal Mirror': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Chest': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
            'Crowbar': {
                'Poor': '6 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons'
            },
            'Iron Spikes (10)': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '4 Moons'
            },
            'Lock': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
            'Merchant\'s Scale': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Mirror (steel)': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Soap': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '8 Terras', 'Superior': '2 Moons', 'Luxury': '4 Moons'
            },
            'Bedroll': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons'
            },
            'Fishing Tackle': {
                'Poor': '5 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Grappling Hook': {
                'Poor': '5 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons'
            },
            'Hammer': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '8 Moons'
            },
            'Mess Kit': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '8 Moons'
            },
            'Piton (each)': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '8 Terras'
            },
            'Pole (10-foot)': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons'
            },
            'Shovel': {
                'Poor': '6 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons'
            },
            'Signal Whistle': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '8 Moons'
            },
            'Tent (two person)': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Whetstone': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '8 Terras', 'Superior': '2 Moons'
            },
            'Bullseye Lantern': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
            'Hooded Lantern': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Lamp': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '8 Moons'
            },
            'Backpack': {
                'Poor': '8 Terras', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
            'Barrel': {
                'Poor': '6 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons'
            },
            'Basket': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons'
            },
            'Bucket': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons'
            },
            'Case (map/scroll)': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Flask/Tankard': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '1 Moon', 'Superior': '2 Moons', 'Luxury': '5 Moons'
            },
            'Glass Bottle': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Jug/Pitcher': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '1 Moon', 'Superior': '2 Moons', 'Luxury': '5 Moons'
            },
            'Sack': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '8 Terras'
            },
            'Vial': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '1 Sun'
            },
            'Waterskin': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '8 Moons'
            },
            'Rope (50 ft, hemp)': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '2 Moons'
            },
            'Rope (50 ft, silk)': {
                'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Torch': {
                'Poor': '2 Bits', 'Common': '4 Bits', 'Good': '8 Bits'
            },
            'Candle': {
                'Poor': '1 Bit', 'Common': '2 Bits', 'Good': '4 Bits', 'Fine': '8 Bits'
            },
        },
        'B. Magical Components and Supplies': {
            'Crystal': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Diamond Dust (100gp worth)': {
                'Common': '5 Suns', 'Good': '10 Suns', 'Fine': '20 Suns', 'Superior': '40 Suns', 'Luxury': '80 Suns'
            },
            'Embroidered Glove': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Herbs (rare)': {
                'Poor': '2 Moons', 'Common': '5 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '8 Suns'
            },
            'Incense (exotic)': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Orb': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
            'Rod': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
            'Staff': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Wand': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
        },
        'C. Special Equipment': {
            'Acid (vial)': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns'
            },
            'Basic Poison (vial)': {
                'Common': '5 Suns', 'Good': '10 Suns', 'Fine': '20 Suns', 'Superior': '40 Suns', 'Luxury': '80 Suns'
            },
            'Caltrops (20)': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns'
            },
            'Chain (10 feet)': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Climber\'s Kit': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Disguise Kit': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Forgery Kit': {
                'Poor': '3 Suns', 'Common': '6 Suns', 'Good': '12 Suns', 'Fine': '25 Suns', 'Superior': '50 Suns', 'Luxury': '100 Suns'
            },
            'Oil (flask)': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '1 Sun'
            },
            'Poison Kit': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
        },
        'D. Gaming and Entertainment': {
            'Bone Dice (set)': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '1 Moon', 'Fine': '3 Moons', 'Superior': '8 Moons', 'Luxury': '2 Suns'
            },
            'Cards (deck)': {
                'Poor': '3 Moons', 'Common': '6 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '8 Suns'
            },
            'Gambit Set': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '20 Suns'
            },
        },
        'F. Slave Costs': {
            'Hokori Laborer': {
                'Poor': '1 Sun', 'Common': '5 Suns', 'Good': '15 Suns', 'Fine': '20 Suns', 'Superior': '30 Suns'
            },
            'Hokori Warrior': {
                'Poor': '10 Suns', 'Common': '30 Suns', 'Good': '80 Suns', 'Fine': '130 Suns', 'Superior': '300 Suns', 'Luxury': '500 Suns'
            },
        },
        'A. Basic Equipment': {
            'Rope (50 ft, hemp)': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '2 Moons'
            },
            'Rope (50 ft, silk)': {
                'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Torch': {
                'Poor': '2 Bits', 'Common': '4 Bits', 'Good': '8 Bits'
            },
            'Candle': {
                'Poor': '1 Bit', 'Common': '2 Bits', 'Good': '4 Bits', 'Fine': '8 Bits'
            },
        },
        'B. Vehicles and Transportation': {
            'Cart': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns'
            },
            'Boat (Row)': {
                'Poor': '5 Suns', 'Common': '10 Suns', 'Good': '20 Suns', 'Fine': '40 Suns', 'Superior': '80 Suns'
            },
            'Ship (Sailing)': {
                'Poor': '200 Suns', 'Common': '400 Suns', 'Good': '800 Suns', 'Fine': '1500 Suns', 'Superior': '3000 Suns', 'Luxury': '6000 Suns'
            },
            'Sled': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns'
            },
            'Carriage': {
                'Common': '25 Suns', 'Good': '50 Suns', 'Fine': '100 Suns', 'Superior': '200 Suns', 'Luxury': '400 Suns'
            },
            'Chariot': {
                'Poor': '15 Suns', 'Common': '30 Suns', 'Good': '60 Suns', 'Fine': '120 Suns', 'Superior': '240 Suns', 'Luxury': '500 Suns'
            },
            'Wagon': {
                'Poor': '10 Suns', 'Common': '20 Suns', 'Good': '40 Suns', 'Fine': '80 Suns', 'Superior': '150 Suns'
            },
            'Wheel (replacement)': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns'
            },
            'Axle (replacement)': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns'
            },
            'Harness': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Canvas Cover': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns'
            },
        },
        'C. Professional Tools': {
            'Cook\'s Tools': {
                'Poor': '3 Moons', 'Common': '6 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '8 Suns'
            },
            'Thieves\' Tools': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns'
            },
            'Tinker\'s Tools': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns'
            },
        },
        'D. Writing Supplies': {
            'Ink (1 oz. bottle)': {
                'Common': '3 Terras', 'Good': '6 Terras', 'Fine': '1 Moon', 'Superior': '2 Moons', 'Luxury': '4 Moons'
            },
            'Quill': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '8 Terras'
            },
            'Parchment (sheet)': {
                'Common': '10 Terras', 'Good': '1 Moon', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '8 Moons'
            },
            'Sealing Wax': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '8 Moons'
            },
            'Blank Book (25 sheets)': {
                'Common': '3 Suns', 'Good': '6 Suns', 'Fine': '12 Suns', 'Superior': '25 Suns', 'Luxury': '50 Suns'
            },
            'Blank Book (50 sheets)': {
                'Common': '6 Suns', 'Good': '12 Suns', 'Fine': '25 Suns', 'Superior': '50 Suns', 'Luxury': '100 Suns'
            },
            'Blank Book (100 sheets)': {
                'Common': '12 Suns', 'Good': '25 Suns', 'Fine': '50 Suns', 'Superior': '100 Suns', 'Luxury': '200 Suns'
            },
        },
        'E. Metals and Materials (per pound)': {
            'Iron': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras'
            },
            'Steel': {
                'Poor': '8 Terras', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons'
            },
            'Lead': {
                'Poor': '15 Suns', 'Common': '30 Suns', 'Good': '60 Suns', 'Fine': '120 Suns'
            },
            'Silver': {
                'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns'
            },
            'Gold': {
                'Common': '15 Suns', 'Good': '30 Suns', 'Fine': '60 Suns', 'Superior': '120 Suns'
            },
            'Argentum': {
                'Good': '60 Suns', 'Fine': '120 Suns', 'Superior': '200 Suns', 'Luxury': '300 Suns'
            },
            'Weapon Silvering': {
                'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Weapon Argented': {
                'Good': '120 Suns', 'Fine': '250 Suns', 'Superior': '450 Suns', 'Luxury': '600 Suns'
            },
        },
        'F. Drugs and Medicine': {
            'Pipe': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '1 Sun'
            },
            'Tobacco (oz)': {
                'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '8 Terras', 'Superior': '2 Moons', 'Luxury': '4 Moons'
            },
            'Opium (oz)': {
                'Common': '3 Moons', 'Good': '6 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
            'Milk of Poppy (vial)': {
                'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Hemlock (oz)': {
                'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons'
            },
            'Nightshade Extract (vial)': {
                'Common': '3 Moons', 'Good': '6 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns'
            },
            'Willow Bark (oz)': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '8 Moons'
            },
            'Mandrake Root (oz)': {
                'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
            'Hemp Oil (vial)': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
        },
        'G. Fresh Produce (per pound)': {
            'Common Vegetables': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras'
            },
            'Local Fruits': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras'
            },
        },
        'H. Lodging/Inn (per night)': {
            'Floor Space': {
                'Poor': '1 Bit', 'Common': '2 Bits'
            },
            'Shared Room': {
                'Poor': '2 Terras', 'Common': '4 Terras'
            },
            'Private Room': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons'
            },
            'Suite': {
                'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
        },
        'E. Musical Instruments': {
            'Drum': {
                'Poor': '3 Moons', 'Common': '6 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '8 Suns'
            },
            'Flute': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
            'Horn': {
                'Poor': '5 Moons', 'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '15 Suns'
            },
            'Lute': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Lyre': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Pan Flute': {
                'Poor': '3 Moons', 'Common': '6 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '8 Suns'
            },
            'Shawm': {
                'Poor': '4 Moons', 'Common': '8 Moons', 'Good': '1 Sun', 'Fine': '2 Suns', 'Superior': '4 Suns', 'Luxury': '8 Suns'
            },
            'Viol': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns', 'Luxury': '60 Suns'
            },
        },
        'A. Vehicles and Components': {
            'Sled': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns'
            },
            'Carriage': {
                'Common': '25 Suns', 'Good': '50 Suns', 'Fine': '100 Suns', 'Superior': '200 Suns', 'Luxury': '400 Suns'
            },
            'Chariot': {
                'Poor': '15 Suns', 'Common': '30 Suns', 'Good': '60 Suns', 'Fine': '120 Suns', 'Superior': '240 Suns', 'Luxury': '500 Suns'
            },
            'Wagon': {
                'Poor': '10 Suns', 'Common': '20 Suns', 'Good': '40 Suns', 'Fine': '80 Suns', 'Superior': '150 Suns'
            },
            'Wheel (replacement)': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns'
            },
            'Axle (replacement)': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns'
            },
            'Harness': {
                'Poor': '1 Sun', 'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Canvas Cover': {
                'Poor': '2 Suns', 'Common': '4 Suns', 'Good': '8 Suns', 'Fine': '15 Suns', 'Superior': '30 Suns'
            },
        },
        'B. Trade Goods (per pound unless noted)': {
            'Cotton (raw)': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons'
            },
            'Linen (raw)': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '8 Moons'
            },
            'Copper (raw)': {
                'Poor': '3 Moons', 'Common': '6 Moons', 'Good': '1 Sun', 'Fine': '2 Suns'
            },
            'Dyes (per ounce)': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
            'Ivory': {
                'Common': '5 Suns', 'Good': '10 Suns', 'Fine': '20 Suns', 'Superior': '40 Suns', 'Luxury': '80 Suns'
            },
            'Jade': {
                'Common': '8 Suns', 'Good': '15 Suns', 'Fine': '30 Suns', 'Superior': '60 Suns', 'Luxury': '120 Suns'
            },
            'Pearls (each)': {
                'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
        },
        'A. Professional Services (per day unless noted)': {
            'Messenger (per mile)': {
                'Poor': '1 Terra', 'Common': '2 Terras', 'Good': '4 Terras', 'Fine': '8 Terras', 'Superior': '2 Moons', 'Luxury': '4 Moons'
            },
            'Courier (per mile)': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons', 'Superior': '4 Moons', 'Luxury': '8 Moons'
            },
            'City Guide': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons', 'Luxury': '1 Sun'
            },
            'Wilderness Guide': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Porter/Bearer': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras', 'Fine': '2 Moons'
            },
            'Ship Passage (per mile)': {
                'Poor': '1 Terra', 'Common': '3 Terras', 'Good': '6 Terras', 'Fine': '1 Moon', 'Superior': '3 Moons', 'Luxury': '1 Sun'
            },
            'Caravan Guard': {
                'Poor': '6 Terras', 'Common': '1 Moon', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons'
            },
            'Scribe': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Translator': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
            'Legal Counsel': {
                'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '15 Suns'
            },
            'Apothecary (consultation)': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
            'Physician': {
                'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Barber-Surgeon': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun'
            },
            'Midwife': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns'
            },
            'Blacksmith (commission)': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Carpenter (commission)': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Mason (commission)': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
            'Tailor (commission)': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Cobbler (commission)': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Cartographer': {
                'Common': '1 Sun', 'Good': '2 Suns', 'Fine': '4 Suns', 'Superior': '8 Suns', 'Luxury': '15 Suns'
            },
            'Herald': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
            'Stablemaster': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons', 'Luxury': '1 Sun'
            },
            'Artist/Painter': {
                'Poor': '2 Moons', 'Common': '4 Moons', 'Good': '8 Moons', 'Fine': '1 Sun', 'Superior': '2 Suns', 'Luxury': '4 Suns'
            },
            'Alchemist': {
                'Common': '2 Suns', 'Good': '4 Suns', 'Fine': '8 Suns', 'Superior': '15 Suns', 'Luxury': '30 Suns'
            },
            'Teacher/Tutor': {
                'Poor': '1 Moon', 'Common': '2 Moons', 'Good': '4 Moons', 'Fine': '8 Moons', 'Superior': '1 Sun', 'Luxury': '2 Suns'
            },
            'Entertainer': {
                'Poor': '4 Terras', 'Common': '8 Terras', 'Good': '2 Moons', 'Fine': '4 Moons', 'Superior': '8 Moons', 'Luxury': '1 Sun'
            },
            'Gravedigger': {
                'Poor': '3 Terras', 'Common': '6 Terras', 'Good': '1 Moon', 'Fine': '2 Moons'
            },
            'Ratcatcher': {
                'Poor': '2 Terras', 'Common': '4 Terras', 'Good': '8 Terras'
            },
        },
    },
};

const CURRENCY = {
    Sun: { value: 240, name: "Gold Sun", plural: "Gold Suns" },
    Moon: { value: 12, name: "Silver Moon", plural: "Silver Moons" },
    Terra: { value: 4, name: "Bronze Terra", plural: "Bronze Terras" },
    Bit: { value: 1, name: "Copper Bit", plural: "Copper Bits" }
};