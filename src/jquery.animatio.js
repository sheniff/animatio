(function(window, $){

  /*------------------------------------
   * CSS animations
   ------------------------------------*/

  $.effects = {
    bounce:"0%, 20%, 50%, 80%, 100% {{browser}transform: translateY(0);}40% {{browser}transform: translateY(-30px);}60% {{browser}transform: translateY(-15px);}",
    bounceIn:"0% {opacity: 0;{browser}transform: scale(.3);}50% {opacity: 1;{browser}transform: scale(1.05);}70% {{browser}transform: scale(.9);}100% {{browser}transform: scale(1);}",
    bounceInUp:"0% {opacity: 0;{browser}transform: translateY(100%);}60% {opacity: 1;{browser}transform: translateY(-30px);}80% {{browser}transform: translateY(10px);}100% {{browser}transform: translateY(0);}",
    bounceInDown:"0% {opacity: 0;{browser}transform: translateY(-100%);}60% {opacity: 1;{browser}transform: translateY(30px);}80% {{browser}transform: translateY(-10px);}100% {{browser}transform: translateY(0);}",
    bounceInLeft:"0% {opacity: 0;{browser}transform: translateX(-100%);}60% {opacity: 1;{browser}transform: translateX(30px);}80% {{browser}transform: translateX(-10px);}100% {{browser}transform: translateX(0);}",
    bounceInRight:"0% {opacity: 0;{browser}transform: translateX(100%);}60% {opacity: 1;{browser}transform: translateX(-30px);}80% {{browser}transform: translateX(10px);}100% {{browser}transform: translateX(0);}",
    bounceOut:"0% {{browser}transform: scale(1);}25% {{browser}transform: scale(.95);}50% {opacity: 1;{browser}transform: scale(1.1);}100% {opacity: 0;{browser}transform: scale(.3);}",
    bounceOutUp:"0% {{browser}transform: translateY(0);}20% {opacity: 1;{browser}transform: translateY(20px);}100% {opacity: 0;{browser}transform: translateY(-100%);}",
    bounceOutDown:"0% {{browser}transform: translateY(0);}20% {opacity: 1;{browser}transform: translateY(-20px);}100% {opacity: 0;{browser}transform: translateY(100%);}",
    bounceOutLeft:"0% {{browser}transform: translateX(0);}20% {opacity: 1;{browser}transform: translateX(20px);}100% {opacity: 0;{browser}transform: translateX(-100%);}",
    bounceOutRight:"0% {{browser}transform: translateX(0);}20% {opacity: 1;{browser}transform: translateX(-20px);}100% {opacity: 0;{browser}transform: translateX(100%);}",
    fadeIn:"0% {opacity: 0;}100% {opacity: 1;}",
    fadeInUp:"0% {opacity: 0;{browser}transform: translateY(50px);}100% {opacity: 1;{browser}transform: translateY(0);}",
    fadeInDown:"0% {opacity: 0;{browser}transform: translateY(-50px);}100% {opacity: 1;{browser}transform: translateY(0);}",
    fadeInLeft:"0% {opacity: 0;{browser}transform: translateX(-20px);}100% {opacity: 1;{browser}transform: translateX(0);}",
    fadeInRight:"0% {opacity: 0;{browser}transform: translateX(20px);}100% {opacity: 1;{browser}transform: translateX(0);}",
    fadeInUpBig:"0% {opacity: 0;{browser}transform: translateY(100%);}100% {opacity: 1;{browser}transform: translateY(0);}",
    fadeInDownBig:"0% {opacity: 0;{browser}transform: translateY(-100%);}100% {opacity: 1;{browser}transform: translateY(0);}",
    fadeInLeftBig:"0% {opacity: 0;{browser}transform: translateX(-100%);}100% {opacity: 1;{browser}transform: translateX(0);}",
    fadeInRightBig:"0% {opacity: 0;{browser}transform: translateX(100%);}100% {opacity: 1;{browser}transform: translateX(0);}",
    fadeOut:"0% {opacity: 1;}100% {opacity: 0;}",
    fadeOutUp:"0% {opacity: 1;{browser}transform: translateY(0);}100% {opacity: 0;{browser}transform: translateY(-50px);}",
    fadeOutDown:"0% {opacity: 1;{browser}transform: translateY(0);}100% {opacity: 0;{browser}transform: translateY(50px);}",
    fadeOutLeft:"0% {opacity: 1;{browser}transform: translateX(0);}100% {opacity: 0;{browser}transform: translateX(-20px);}",
    fadeOutRight:"0% {opacity: 1;{browser}transform: translateX(0);}100% {opacity: 0;{browser}transform: translateX(20px);}",
    fadeOutUpBig:"0% {opacity: 1;{browser}transform: translateY(0);}100% {opacity: 0;{browser}transform: translateY(-100%);}",
    fadeOutDownBig:"0% {opacity: 1;{browser}transform: translateY(0);}100% {opacity: 0;{browser}transform: translateY(100%);}",
    fadeOutLeftBig:"0% {opacity: 1;{browser}transform: translateX(0);}100% {opacity: 0;{browser}transform: translateX(-100%);}",
    fadeOutRightBig:"0% {opacity: 1;{browser}transform: translateX(0);}100% {opacity: 0;{browser}transform: translateX(100%);}",
    flash:"0%, 50%, 100% {opacity: 1;}25%, 75% {opacity: 0;}",
    flipIn: '0% { {browser}transform: rotateY(0) } 100% { {browser}transform: rotateY(180deg) }',
    flipInY:"0% {{browser}transform: perspective(400px) rotateX(90deg);opacity: 0;}40% {{browser}transform: perspective(400px) rotateX(-10deg);}70% {{browser}transform: perspective(400px) rotateX(10deg);}100% {{browser}transform: perspective(400px) rotateX(0deg);opacity: 1;}",
    flipInX:"0% {{browser}transform: perspective(400px) rotateY(90deg);opacity: 0;}40% {{browser}transform: perspective(400px) rotateY(-10deg);}70% {{browser}transform: perspective(400px) rotateY(10deg);}100% {{browser}transform: perspective(400px) rotateY(0deg);opacity: 1;}",
    flipOut: '0% { {browser}transform: rotateY(180deg) } 100% { {browser}transform: rotateY(0) }',
    flipOutY:"0% {{browser}transform: perspective(400px) rotateX(0deg);opacity: 1;}100% {{browser}transform: perspective(400px) rotateX(90deg);opacity: 0;}",
    flipOutX:"0% {{browser}transform: perspective(400px) rotateY(0deg);opacity: 1;}100% {{browser}transform: perspective(400px) rotateY(90deg);opacity: 0;}",
    hinge:"0% { {browser}transform: rotate(0); {browser}transform-origin: top left; {browser}animation-timing-function: ease-in-out; }20%, 60% { {browser}transform: rotate(80deg); {browser}transform-origin: top left; {browser}animation-timing-function: ease-in-out; }40% { {browser}transform: rotate(60deg); {browser}transform-origin: top left; {browser}animation-timing-function: ease-in-out; }80% { {browser}transform: rotate(60deg) translateY(0); opacity: 1; {browser}transform-origin: top left; {browser}animation-timing-function: ease-in-out; }100% { {browser}transform: translateY(700px); opacity: 0; }",
    lightSpeedIn:"0% { {browser}transform: translateX(100%) skewX(-30deg); opacity: 0; }60% { {browser}transform: translateX(-20%) skewX(30deg); opacity: 1; }80% { {browser}transform: translateX(0%) skewX(-15deg); opacity: 1; }100% { {browser}transform: translateX(0%) skewX(0deg); opacity: 1; }",
    lightSpeedOut:"0% { {browser}transform: translateX(0%) skewX(0deg); opacity: 1; }100% { {browser}transform: translateX(100%) skewX(-30deg); opacity: 0; }",
    pulse:"0% { {browser}transform: scale(1); }50% { {browser}transform: scale(1.1); }100% { {browser}transform: scale(1); }",
    rollIn:"0% { opacity: 0; {browser}transform: translateX(-100%) rotate(-120deg); }100% { opacity: 1; {browser}transform: translateX(0px) rotate(0deg); }",
    rollOut:"0% {opacity: 1;{browser}transform: translateX(0px) rotate(0deg);}100% {opacity: 0;{browser}transform: translateX(100%) rotate(120deg);}",
    rotateIn:"0% {{browser}transform-origin: center center;{browser}transform: rotate(-200deg);opacity: 0;}100% {{browser}transform-origin: center center;{browser}transform: rotate(0);opacity: 1;}",
    rotateInUpLeft:"0% {{browser}transform-origin: left bottom;{browser}transform: rotate(90deg);opacity: 0;}100% {{browser}transform-origin: left bottom;{browser}transform: rotate(0);opacity: 1;}",
    rotateInDownLeft:"0% {{browser}transform-origin: left bottom;{browser}transform: rotate(-90deg);opacity: 0;}100% {{browser}transform-origin: left bottom;{browser}transform: rotate(0);opacity: 1;}",
    rotateInUpRight:"0% {{browser}transform-origin: right bottom;{browser}transform: rotate(-90deg);opacity: 0;}100% {{browser}transform-origin: right bottom;{browser}transform: rotate(0);opacity: 1;}",
    rotateInDownRight:"0% {{browser}transform-origin: right bottom;{browser}transform: rotate(90deg);opacity: 0;}100% {{browser}transform-origin: right bottom;{browser}transform: rotate(0);opacity: 1;}",
    rotateOut:"0% {{browser}transform-origin: center center;{browser}transform: rotate(0);opacity: 1;}100% {{browser}transform-origin: center center;{browser}transform: rotate(200deg);opacity: 0;}",
    rotateOutUpLeft:"0% {{browser}transform-origin: left bottom;{browser}transform: rotate(0);opacity: 1;}100% {{browser}transform-origin: left bottom;{browser}transform: rotate(-90deg);opacity: 0;}",
    rotateOutDownLeft:"0% {{browser}transform-origin: left bottom;{browser}transform: rotate(0);opacity: 1;}100% {{browser}transform-origin: left bottom;{browser}transform: rotate(90deg);opacity: 0;}",
    rotateOutUpRight:"0% {{browser}transform-origin: right bottom;{browser}transform: rotate(0);opacity: 1;}100% {{browser}transform-origin: right bottom;{browser}transform: rotate(90deg);opacity: 0;}",
    rotateOutDownRight:"0% {{browser}transform-origin: right bottom;{browser}transform: rotate(0);opacity: 1;}100% {{browser}transform-origin: right bottom;{browser}transform: rotate(-90deg);opacity: 0;}",
    slideInLeft:"0% {{browser}transform: translateX(-100%);}100% {{browser}transform: translateX(0);}",
    slideInRight:"0% {{browser}transform: translateX(100%);}100% {{browser}transform: translateX(0);}",
    slideOutLeft:"0% {{browser}transform: translateX(0);}100% {{browser}transform: translateX(-100%);}",
    slideOutRight:"0% {{browser}transform: translateX(0%);}100% {{browser}transform: translateX(100%);}",
    shake:"0%, 100% {{browser}transform: translateX(0);}10%, 30%, 50%, 70%, 90% {{browser}transform: translateX(-10px);}20%, 40%, 60%, 80% {{browser}transform: translateX(10px);}",
    swing:"20%, 40%, 60%, 80%, 100% { {browser}transform-origin: top center; }20% { {browser}transform: rotate(15deg); }40% { {browser}transform: rotate(-10deg); }60% { {browser}transform: rotate(5deg); }80% { {browser}transform: rotate(-5deg); }100% { {browser}transform: rotate(0deg); }",
    tada:"0% {{browser}transform: scale(1);}10%, 20% {{browser}transform: scale(0.9) rotate(-3deg);}30%, 50%, 70%, 90% {{browser}transform: scale(1.1) rotate(3deg);}40%, 60%, 80% {{browser}transform: scale(1.1) rotate(-3deg);}100% {{browser}transform: scale(1) rotate(0);}",
    wiggle:"0% { {browser}transform: skewX(9deg); }10% { {browser}transform: skewX(-8deg); }20% { {browser}transform: skewX(7deg); }30% { {browser}transform: skewX(-6deg); }40% { {browser}transform: skewX(5deg); }50% { {browser}transform: skewX(-4deg); }60% { {browser}transform: skewX(3deg); }70% { {browser}transform: skewX(-2deg); }80% { {browser}transform: skewX(1deg); }90% { {browser}transform: skewX(0deg); }100% { {browser}transform: skewX(0deg); }",
    wobble:"0% { {browser}transform: translateX(0%); }15% { {browser}transform: translateX(-25%) rotate(-5deg); }30% { {browser}transform: translateX(20%) rotate(3deg); }45% { {browser}transform: translateX(-15%) rotate(-3deg); }60% { {browser}transform: translateX(10%) rotate(2deg); }75% { {browser}transform: translateX(-5%) rotate(-1deg); }100% { {browser}transform: translateX(0%); }",
    zoomIn: "0% {opacity: 0;{browser}transform: scale(.1);} 100% {{browser}transform: scale(1);}",
    zoomInCurved: '0% { {browser}transform: scale(0) translateX(-100%) translateY(-100%) } 100% { {browser}transform: scale(1) translateX(0) translateY(0) }',
    zoomInFlip: '0% { {browser}transform: scale(0) translateX(-100%) translateY(-100%) rotate(45deg) rotateX(-180deg) rotateY(-180deg) } 100% { {browser}transform: scale(1) translateX(0) translateY(0) rotate(0deg) rotateX(0deg) rotateY(0deg) }',
    zoomOut: "0% {{browser}transform: scale(1);} 100% { opacity: 0; {browser}transform: scale(.1);}",
    zoomOutCurved: '0% { {browser}transform: scale(1) translateX(0) translateY(0) } 100% { {browser}transform: scale(0) translateX(-100%)  translateY(-100%) }',
    zoomOutFlip: '0% { {browser}transform: scale(1) translateX(0) translateY(0) rotate(0deg) rotateX(0deg) rotateY(0deg) } 100% { {browser}transform: scale(0) translateX(-100%) translateY(-100%) rotate(45deg) rotateX(-180deg) rotateY(-180deg) }'
  };

  var global = window,
      document = global.document,
      documentElement = document.documentElement,
      navigator = global.navigator,
      agent = navigator.userAgent,
      prefix = (/webkit/i).test(agent) ? '-webkit-' : (/firefox/i).test(agent) ? '-moz-' : (/opera/i).test(agent) ? '-o-' : (/msie/i).test(agent) ? '-ms-' : '',
      cleaned = prefix.replace(/-/g, ''),
      cache = {},
      style = null;

  /**
   * Animates an object (or a group of them) using CSS3
   * @param {String}   effect The name of animation to apply
   * @param {Mixed}    config The animation configuration
   * @param {Function} fn     The animation completion callback (optional)
   */
  $.fn.animatio = function(effect, config, fn){

    if($.isFunction(config)){
      fn = config;
      config = {};
    }

    config = $.extend(true, {
      bubbles: false,
      delay: '0s',
      direction: 'normal',
      duration: '1s',
      fillMode: 'none',
      iterationCount: 1,
      timingFunction: 'ease',
    }, config || {}, $(this).data());

    return this.each(function(){
      return new animatio(effect, config, this, fn);
    });
  };

  var animatio = function(type, config, target, fn){
    return this.run(type, config, target, fn);
  };

  $.extend(animatio.prototype, {
    /**
     * Checks if a style sheet has been previously set to store the animation rules
     * @return Boolean Always returns true (because if it doesn't exist a style sheet, it'll create a new one)
     */
    createStyle: function(){
      if(!style){
        style = document.createElement('style');
        style.setAttribute('type', 'text/css');
        document.getElementsByTagName('head')[0].appendChild(style);
      }
      return true;
    },
    /**
     * Returns the duration for the animation effect
     * @param  {Mixed}  duration The number or string containing the duration of the animation
     * @return {String} returns  The duration in string format
     */
    duration: function(duration){
      if(duration){
        if(typeof(duration) === 'number')
          return duration+'s';

        if(typeof(duration) === 'string')
          return (duration.match(/[\d\.]*m?s/)[0] || this.config.duration);
      }

      return this.config.duration;
    },
    /**
     * Replaces template keys with object property value
     * @param  {String} tpl The string template containing the keys
     * @param  {Mixed}  obj The object containing the template keys
     * @return {String}     The updated string template
     */
    format: function(tpl, obj){
      if(typeof(tpl) !== 'string')
        return;

      return tpl.replace(/\{(\w+)\}/g, function(match, key){
        return obj[key] || '';
      });
    },
    /**
     * Generates a new animation rule in case it hadn't been cached previously
     * Developers can generate new rules just by using a name that doesn't match with
     * any of the default names and adding a new rule in "config.rule".
     *
     * @param  {String} name    The name of animation to use
     * @param  {Mixed}  config  Extra params to config the animation
     * @return {String} returns The name of the rule to apply to the object(s) to be animated
     */
    rule: function(name){
      // check if animation exists inside our cache
      if(!cache[name]){
        // create keyframe animation and store it in our cache
        cache[name] = '@' + prefix + 'keyframes ' + name;
        cache[name] += ' { ' + (
          this.format($.effects[name] || this.config.rule, { browser: prefix })
        ) + '}';

        // add animation css to our inline style block so we only load it once
        style.textContent += ('\n' + cache[name]);
      }

      return name;
    },
    /**
     * Apply a given animation to one or more elements in a matched set
     * @param  {String}       type   The type of animation
     * @param  {Object}       config The animation configuration
     * @param  {HTML Element} target The HTML element to animate
     * @param  {Function}     fn     The animation completion callback
     * @return {HTML Element}
     */
    run: function(type, config, target, fn){
      var element = $(target),
          animation = null,
          animationEnd = { webkit: 'webkitAnimationEnd', moz: 'animationend', o: 'oAnimationEnd', ms: 'animationend' },
          prev = element.css(prefix + 'animation-name'),
          css = {};

      // reference config
      this.config = config;
      // make sure we have our style block
      this.createStyle();
      // setup callback method
      element.one(animationEnd[cleaned], function(e){
        if(!config.bubbles)
          e.stopPropagation();

        element.css(prefix + 'animation-play-state', 'paused');

        $.isFunction(fn) && fn.call(this);
      });

      if(type === 'reset'){
        element.css(prefix + 'animation', 'none');
      }else{
        config = config || {};
        animation = this.rule(type, config);

        // reset animation state for reuse
        if(type === prev){
          element.css(prefix + 'animation', 'none');

          setTimeout(function(){
            css[prefix + 'animation-name'] = animation;
          }, 10);
        }else{
          css[prefix + 'animation-name'] = animation;
        }

        css[prefix + 'animation-delay']           = this.duration(config.delay);
        css[prefix + 'animation-direction']       = config.direction;
        css[prefix + 'animation-duration']        = this.duration(config.duration);
        css[prefix + 'animation-fill-mode']       = config.fillMode;
        css[prefix + 'animation-iteration-count'] = config.iterationCount;
        css[prefix + 'animation-play-state']      = config.playState || 'running';
        css[prefix + 'animation-timing-function'] = config.timingFunction;
        css[prefix + 'tranform']                  = 'translateZ(0)';

        // apply styling to element
        element.css(css);
      }

      return target;
    }
  });

})(window, jQuery);