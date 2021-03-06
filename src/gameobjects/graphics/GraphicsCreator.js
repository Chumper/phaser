/**
 * @author       Richard Davey <rich@photonstorm.com>
 * @copyright    2018 Photon Storm Ltd.
 * @license      {@link https://github.com/photonstorm/phaser/blob/master/license.txt|MIT License}
 */

var GetAdvancedValue = require('../../utils/object/GetAdvancedValue');
var GameObjectCreator = require('../GameObjectCreator');
var Graphics = require('./Graphics');

/**
 * Creates a new Graphics Game Object and returns it.
 *
 * Note: This method will only be available if the Graphics Game Object has been built into Phaser.
 *
 * @method Phaser.GameObjects.GameObjectCreator#graphics
 * @since 3.0.0
 *
 * @param {object} [config] - [description]
 *
 * @return {Phaser.GameObjects.Graphics} The Game Object that was created.
 */
GameObjectCreator.register('graphics', function (config)
{
    var add = GetAdvancedValue(config, 'add', true);
    var graphics = new Graphics(this.scene, config);

    if (add)
    {
        this.scene.sys.displayList.add(graphics);
    }
    
    return graphics;
});

//  When registering a factory function 'this' refers to the GameObjectCreator context.
