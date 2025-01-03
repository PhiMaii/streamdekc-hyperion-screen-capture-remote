import streamDeck, {
  action,
  type KeyDownEvent,
  SingletonAction,
} from "@elgato/streamdeck";
import { time } from "console";
/**
 * An action that logs a Stream Deck key press.
 */

@action({ UUID: "net.phimai.hyperion-screen-capture-remote.restart-capture" })
export class RestartCapture extends SingletonAction {
  /**
   * Handles the user pressing a Stream Deck key (pedal, G-key, etc).
   * @param ev Information about the event.
   */

  async onKeyDown(ev: KeyDownEvent<CounterSettings>): Promise<void> {
    const onCommandUrl = "http://localhost:9191/?command=ON";
    const offCommandUrl = "http://localhost:9191/?command=OFF";

    try {
      await fetch(offCommandUrl);
    } catch (error) {
      streamDeck.logger.error("Error!");
    }
    streamDeck.logger.info("Succesfully sent command");

    try {
      await fetch(onCommandUrl);
    } catch (error) {
      streamDeck.logger.error("Error!");
    }
    streamDeck.logger.info("Succesfully sent command");
  }
}

type CounterSettings = {
  count: number;
};
