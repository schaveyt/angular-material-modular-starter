let faker = require('faker');

let generateElements = () => {
    let elements = [];

    for (let id = 0; id < 300; id++) {
        let identifier = `EX-TXT-${id}`;
        let text = faker.lorem.text();
        let status = faker.random.word();

        elements.push({
            "id": identifier,
            "text": text,
            "status": status
        });
    }

    return { "items": elements }
}

module.exports = generateElements