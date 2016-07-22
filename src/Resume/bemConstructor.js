const bemConstructor = base => ({ child, state }) => {
    let className = base;

    if (child) {
        className = `${className}__${child}`
    }

    if (state) {
        className = `${className}--${state}`
    }

    return className;
}

export default bemConstructor