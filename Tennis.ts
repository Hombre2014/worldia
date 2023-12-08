type GameState =
  | 'P1 0 - P2 0'
  | `P1 ${'15' | '30' | '40' | string} - P2 ${'15' | '30' | '40' | string}`
  | '15a'
  | '30a'
  | 'P1 WINS'
  | 'P2 WINS'
  | 'DEUCE'
  | 'P1 ADVANTAGE'
  | 'P2 ADVANTAGE';

function computeGameState(
  nameP1: string,
  nameP2: string,
  wins: string[]
): GameState {
  let scoreP1 = 0;
  let scoreP2 = 0;

  for (const winner of wins) {
    if (winner === nameP1) {
      scoreP1++;
    } else if (winner === nameP2) {
      scoreP2++;
    }
  }

  const getScoreString = (score: number): '15' | '30' | '40' | string => {
    if (score === 0) return '0';
    else if (score === 1) return '15';
    else if (score === 2) return '30';
    else if (score === 3) return '40';
    else return `${score}`;
  };

  if (scoreP1 === 0 && scoreP2 === 0) {
    return 'P1 0 - P2 0';
  } else if (scoreP1 === scoreP2) {
    if (scoreP1 < 3) {
      return `${getScoreString(scoreP1)}a` as '15a' | '30a';
    } else if (scoreP1 === 3) {
      return 'DEUCE';
    } else {
      return 'P1 ADVANTAGE';
    }
  } else if (scoreP1 >= 4 && scoreP1 > scoreP2 + 1) {
    return 'P1 WINS';
  } else if (scoreP2 >= 4 && scoreP2 > scoreP1 + 1) {
    return 'P2 WINS';
  } else {
    return `P1 ${getScoreString(scoreP1)} - P2 ${getScoreString(scoreP2)}`;
  }
}
