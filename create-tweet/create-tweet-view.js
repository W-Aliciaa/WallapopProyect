export const buildTweetCreationForm = () => {
  return `
      <form>
        <textarea name="new-tweet" id="new-tweet" minlength="5" required></textarea>
        <button type="submit">Crear Tweet</button>
      </form>
  `;
}