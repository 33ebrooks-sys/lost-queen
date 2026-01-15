// Auto-generated code. Do not edit.
namespace myTiles {
    //% fixedInstance jres blockIdentity=images._tile
    export const transparency16 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile1 = image.ofBuffer(hex``);
    //% fixedInstance jres blockIdentity=images._tile
    export const tile2 = image.ofBuffer(hex``);

    helpers._registerFactory("tilemap", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "level0":
            case "level4":return tiles.createTilemap(hex`1000100004040404040304040404040404040304040304040404040404040404040303040404040404040404030304040403030404040404040404040304040404040404040404020101040404040401040404040303020201010104040401010401030403030302010101040404040404040404030305050505030203030303030303040503030404040505020103050502030404050304040404040505050404050304040401010404040303030404040401040404050303040404040404040401010404040405030303030204040401010304030404040303030103030101010505030404030403030505050505050504030403030304050303040404040404040303`, img`
2 2 2 2 2 . 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 . . 2 
2 2 2 2 2 2 2 2 . . 2 2 2 . . 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 . . . 2 2 2 2 2 . 2 2 2 2 
. . . . . . . 2 2 2 . . 2 . . 2 
. . . . . . . 2 2 2 2 2 2 2 2 2 
. . 2 2 2 2 . . . . . . . . . 2 
2 . . 2 2 2 2 2 . . . 2 2 . . 2 
2 2 . 2 2 2 2 2 2 2 2 2 2 2 . 2 
2 2 . . 2 2 2 . . . 2 2 2 2 . 2 
2 2 2 . . 2 2 2 2 2 2 2 2 . . 2 
2 2 2 2 . . . . . 2 2 2 . . . 2 
. 2 2 2 . . . . . . . . . 2 2 . 
2 2 . 2 . . 2 2 2 2 2 2 2 2 . 2 
. . . 2 2 . . 2 2 2 2 2 2 2 . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,myTiles.tile1], TileScale.Sixteen);
            case "level1":
            case "level1":return tiles.createTilemap(hex`1000100004040404040304040404040404040304040304040404040404040404040303040404040404040404030304040403030404040404040404040304040404040404040404020101040404040401040404040303020201010104040401010401030403030302010101040404040404040404030305050505030203030303030303040603030505060606060606050502030404060306050504040404040606050304040401010605050404040404040601040404060303060504040404040401010404040406030303030204040401010304030404040303030103030101010606030404030403030606060606060604030403030304060303040404040404040303`, img`
2 2 2 2 2 . 2 2 2 2 2 2 2 2 . 2 
2 . 2 2 2 2 2 2 2 2 2 2 2 . . 2 
2 2 2 2 2 2 2 2 . . 2 2 2 . . 2 
2 2 2 2 2 2 2 2 . 2 2 2 2 2 2 2 
2 2 2 . . . 2 2 2 2 2 . 2 2 2 2 
. . . . . . . 2 2 2 . . 2 . . 2 
. . . . . . . 2 2 2 2 2 2 2 2 2 
. . . . . . . . . . . . . . . 2 
2 . . . . 2 2 2 2 2 2 . . . . 2 
2 2 . 2 . . 2 2 2 2 2 2 2 . . 2 
2 2 . . 2 . . 2 2 2 2 2 2 2 . 2 
2 2 2 . . 2 . 2 2 2 2 2 2 . . 2 
2 2 2 2 . . . . . 2 2 2 . . . 2 
. 2 2 2 . . . . . . . . . 2 2 . 
2 2 . 2 . . 2 2 2 2 2 2 2 2 . 2 
. . . 2 2 . . 2 2 2 2 2 2 2 . . 
`, [myTiles.transparency16,sprites.castle.tileGrass2,sprites.castle.tileGrass3,sprites.castle.tileGrass1,sprites.builtin.forestTiles0,myTiles.tile1,myTiles.tile2], TileScale.Sixteen);
            case "level5":
            case "level5":return tiles.createTilemap(hex`1000100007090909090909090909090909090908020101010101010101010101010101060201010a01010101010101010101010602010101010101010101010101010106020101010101010101010101010101060a01010101010a0101010101010101060201010101010101010101010101010602010a0101010101010101010101010602010101010101010101010101010106020101010101010101010101010101060201010101010a010101010101010106020101010101010101010101010101060a010101010101010101010101010106020101010101010101010101010101060a01010101010a01010101010101010603050505050505050505050505050504`, img`
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . 2 . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . . . . . 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . 2 . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
. . . . . . 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . . . . . . . . . . . . . . . 
. . . . . . . . . . . . . . . . 
2 . . . . . 2 . . . . . . . . . 
. . . . . . . . . . . . . . . . 
`, [myTiles.transparency16,sprites.builtin.forestTiles10,sprites.builtin.forestTiles9,sprites.builtin.forestTiles13,sprites.builtin.forestTiles15,sprites.builtin.forestTiles14,sprites.builtin.forestTiles11,sprites.builtin.forestTiles5,sprites.builtin.forestTiles7,sprites.builtin.forestTiles6,myTiles.tile2], TileScale.Sixteen);
        }
        return null;
    })

    helpers._registerFactory("tile", function(name: string) {
        switch(helpers.stringTrim(name)) {
            case "transparency16":return transparency16;
            case "myTile":
            case "tile1":return tile1;
            case "myTile0":
            case "tile2":return tile2;
        }
        return null;
    })

}
// Auto-generated code. Do not edit.
