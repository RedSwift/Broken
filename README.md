# Broken

Broken was intended to be a tetris variant, somewhat similiar to puzzle fighter (for those who have played it), however due to time constraint and understanding gap, the game could not meet the requirements.

Therefore Broken has evolved into a survival horror game, where the aim is to stay in the game for as long as possible before the grid is filled.

----- Process ------------
At the beginning, high level tasks were laid out via trello and classified into three sections - To do, doing and done. Canvas was chosen as it was the technology used in breakout, and something I was comfortable with. A small portion of JQuery was also used for selectors and basic function tasks.

---- Challenges ----------
Getting the blocks to move - was not a challenging task, basically had to adjust the positions of the object being drawn on the canvas.

Spawning a different block - this was where the challenge begun, as the nature of the canvas was to redraw itself again and again, and it took a while to consider saving the previous coordinates into an array so that it can be drawn separately.

Collision - basic restriction for the block to stay within the grid was easy to do, however getting it to recognize the different blocks on the field was challenging. Once the logic of collision calculation was understood, implementation, however, was easier.

----- To be worked on ------
As of now, I am unable to create a collision detection for the blocks exact position to detect when the position is filled. I was also unable to figure out the logic for 'clearing' a specific area upon filled. 

------ Summary -------------
While it may be unlikely that I would be able to apply over 80% of what was learnt in standard web design, the short venture into gaming helped me to open my eyes to animation and movement in general. 

The process of having to calulate coordinates and pixels will also go a long way in helping me make complex backend calculations for the future.
