import streamDeck, { action, type KeyDownEvent, SingletonAction } from "@elgato/streamdeck";
/**
 * An action that logs a Stream Deck key press.
 */

@action({ UUID: "net.phimai.hyperion-screen-capture-remote.stop-capture" })
export class StopCapture extends SingletonAction {
	/**
	 * Handles the user pressing a Stream Deck key (pedal, G-key, etc).
	 * @param ev Information about the event.
	 */
	override onKeyDown(ev: KeyDownEvent<Settings>): void | Promise<void> {
		streamDeck.logger.info(`Stop Key pressed!`);
	}
}



type Settings = {
};