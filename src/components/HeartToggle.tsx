import styles from "./HeartToggle.module.css";
import { type Player } from "../api";

interface EmojiToggleProps {
  player: Player;
  isFavorite: boolean;
  onToggle: (player: Player) => void;
}

const EmojiToggle = ({ player, isFavorite, onToggle }: EmojiToggleProps) => {
  return (
    <div className={styles.favTitle}>
      <button
        onClick={() => onToggle(player)}
        className={styles.emojiToggle}
        aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
      >
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default EmojiToggle;
