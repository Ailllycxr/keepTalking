const Manual = () => {
  const greek = "ΑΒΓΔΕΖΗΘΙΚΛΜΝΞΟΠΡΣΤΥΦΧΨΩσς";
  const alphabet = "ZKFYPEXTRNGQLUAMSIJBCODWVH";

  // Create an array of rows based on the greek and alphabet strings
  const rows = [];
  for (let i = 0; i < greek.length; i++) {
    const greekLetter = greek[i];
    const alphabetLetter = alphabet[i];

    rows.push(
      <tr key={i}>
        <td>{greekLetter}</td>
        <td>{alphabetLetter}</td>
      </tr>
    );
  }

  return (
    <div>
      <h1 className="manual-h1">Game Manual</h1>

      {/* Cypher Table */}
      <div>
        <h2 className="manual-h2">Cypher Table</h2>
        {/* Table with header cell and data cell styles */}
        <table className="manual-table">
          <tbody>{rows}</tbody>
        </table>
      </div>
    </div>
  );
};

export default Manual;
