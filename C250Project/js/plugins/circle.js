var BHell = (function (my) {

    var BHell_Enemy_Circle = my.BHell_Enemy_Circle = function() {
        this.initialize.apply(this, arguments);
    };

    BHell_Enemy_Circle.prototype = Object.create(my.BHell_Enemy_Base.prototype);
    BHell_Enemy_Circle.prototype.constructor = BHell_Enemy_Circle;

	BHell_Enemy_Circle.prototype.initialize = function(x, y, image, params, parent, enemyList) {
        params.hp = 50;
        params.speed = 4;
        params.hitbox_w = 300;
        params.hitbox_h = 100;
        params.animated = false;
        my.BHell_Enemy_Base.prototype.initialize.call(this, x, y, image, params, parent, enemyList);
		this.mover = new my.BHell_Mover_Still(Graphics.width / 2, 250, 0, this.hitboxW, this.hitboxH);

		var emitterParams = {};
		emitterParams.period = 75; 
		emitterParams.after_period = 50; 
		emitterParams.aim = true;
		emitterParams.alwaysAim = true;
		emitterParams.bullet = {};
        emitterParams.bullet.direction = 6;

		// set player.can_bomb to true by V.L.
		my.player.can_bomb = true; 
		
		this.emitters.push(new my.BHell_Emitter_Circle(this.x, this.y, emitterParams, parent, my.enemyBullets));

    };
	
	
    return my;
} (BHell || {}));