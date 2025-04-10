import * as Phaser from 'phaser';
import { Position } from "../../common/types";

// Configuración necesaria para crear un nuevo jugador
export type PlayerConfig = {
    scene: Phaser.Scene;      // La escena donde se creará el jugador
    position: Position;       // Posición inicial (x,y) del jugador
    assetKey: string;        // Clave del sprite/imagen a usar para el jugador
    frame?: number;          // Frame opcional para animaciones (por defecto 0)
}

/**
 * Clase Player que representa al jugador en el juego
 * Extiende de Sprite de Phaser para tener funcionalidades de renderizado y física
 */
export class Player extends Phaser.Physics.Arcade.Sprite{
    constructor(config: PlayerConfig){
        // Desestructura la configuración para usar sus valores
        const { scene, position, assetKey, frame } = config;
        const { x, y } = position;
        // Llama al constructor padre con los parámetros necesarios
        super(scene, x, y, assetKey, frame || 0);

        // Añade el sprite a la escena para que sea visible
        scene.add.existing(this);
        // Habilita la física del jugador para colisiones y movimiento
        scene.physics.add.existing(this);
    }
}