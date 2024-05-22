export const validateHero = (hero) => {
    const { name, ...others } = hero;

    return `Error when registering the hero.
  Expected arguments:
  - name: of type String - ${name} was received
  Optional arguments:
  - team, publisher, alias and powers - ${JSON.stringify(others)} was received`;
};
