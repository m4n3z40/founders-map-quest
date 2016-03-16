import path from 'path';
import fs from 'fs';
import test from 'tape';
import {
    CSV_SEPARATOR_COMMA,
    CSV_SEPARATOR_SEMICOLON,
    CSV_SEPARATOR_TAB,
    parseCSVAsMatrix,
    parseCSV
} from '../../src/utils/csv';

const CSVWithCommaSeparator = fs.readFileSync(path.join(__dirname, '../data/sample-commas.csv'), 'utf-8');
const CSVWithSemicolonSeparator = fs.readFileSync(path.join(__dirname, '../data/sample-semicolons.csv'), 'utf-8');
const CSVWithTabSeparator = fs.readFileSync(path.join(__dirname, '../data/sample-tabs.csv'), 'utf-8');

const expectedMatrix = [
    ["Id", "Company Name", "Founder", "City", "Country", "Postal Code", "Street", "Photo", "Home Page", "Garage Latitude", "Garage Longitude"],
    ["1", "Google", "Larry Page & Sergey Brin", "Mountain View", "USA", "CA 94043", "1600 Amphitheatre Pkwy", "http://interviewsummary.com/wp-content/uploads/2013/07/larry-page-and-sergey-brin-of-google-620x400.jpg", "http://google.com", "37.457674", "-122.163452"],
    ["2", "Apple", "Steve Jobs & Steve Wozniak", "Cupertino", "USA", "CA 95014", "1 Infinite Loop", "http://i.dailymail.co.uk/i/pix/2013/02/08/article-2275512-172E13BB000005DC-732_634x505.jpg", "http://apple.com", "37.3403188", "-122.0581469"],
    ["3", "Microsoft", "Bill Gates", "Redmond", "USA", "WA 98052-7329", "One Microsoft Way", "http://postdefiance.com/wp-content/uploads/2013/02/bill-gates-microsoft-young.jpg", "http://microsoft.com", "37.472189", "-122.190191"]
];

const expectedObject = {
    header: expectedMatrix.slice()[0],
    body: expectedMatrix.slice(1)
};

test('parseCSVAsMatrix parses CSV and returns a matrix when separator is comma', t => {
    const actualMatrix = parseCSVAsMatrix(CSVWithCommaSeparator, CSV_SEPARATOR_COMMA);

    t.same(actualMatrix, expectedMatrix);

    t.end();
});

test('parseCSV parses CSV and returns an object when separator is comma', t => {
    const actualObject = parseCSV(CSVWithCommaSeparator, CSV_SEPARATOR_COMMA);

    t.same(actualObject, expectedObject);

    t.end();
});

test('parseCSVAsMatrix parses CSV and returns a matrix when separator is semicolon', t => {
    const actualMatrix = parseCSVAsMatrix(CSVWithSemicolonSeparator, CSV_SEPARATOR_SEMICOLON);

    t.same(actualMatrix, expectedMatrix);

    t.end();
});

test('parseCSV parses CSV and returns a object when separator is semicolon', t => {
    const actualObject = parseCSV(CSVWithSemicolonSeparator, CSV_SEPARATOR_SEMICOLON);

    t.same(actualObject, expectedObject);

    t.end();
});

test('parseCSVAsMatrix parses CSV and returns a matrix when separator is tab', t => {
    const actualMatrix = parseCSVAsMatrix(CSVWithTabSeparator, CSV_SEPARATOR_TAB);

    t.same(actualMatrix, expectedMatrix);

    t.end();
});

test('parseCSV parses CSV and returns a object when separator is tab', t => {
    const actualObject = parseCSV(CSVWithTabSeparator, CSV_SEPARATOR_TAB);

    t.same(actualObject, expectedObject);

    t.end();
});
