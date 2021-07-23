import {isHrefSameHost} from "../utils/URL";

beforeAll(() => {
    const location: any = new URL('https://www.example.com')
    location.assign = jest.fn()
    location.replace = jest.fn()
    location.reload = jest.fn()
    global.window.location = location;
});

it('Works when a base relative path is entered', () => {
    expect(isHrefSameHost("/my-path")).toBe(true)
});
it('Works when a relative path is entered', () => {
    expect(isHrefSameHost("./my-path")).toBe(true)
    expect(isHrefSameHost("../my-other-path")).toBe(true)
    expect(isHrefSameHost("../path/to/../my-third-path")).toBe(true)
});

it('Works when a relative path (without the dots) is entered', () => {
    expect(isHrefSameHost("dir")).toBe(true)
    expect(isHrefSameHost("path/to/dir")).toBe(true)
    expect(isHrefSameHost("path/to/../other-dir")).toBe(true)
});

it('Works when a protocol relative path is entered', () => {
    

    expect(isHrefSameHost("//www.example.com/path")).toBe(true)
    expect(isHrefSameHost("//www.example2.com/path")).toBe(false)
});

it('Works when an absolute path is entered', () => {
    

    expect(isHrefSameHost("https://www.example.com/path")).toBe(true)
    expect(isHrefSameHost("https://www.example2.com/path")).toBe(false)
});

it('Works when an absolute (http=https) path is entered', () => {
    
    expect(isHrefSameHost("http://www.example.com/path")).toBe(true)
    expect(isHrefSameHost("https://www.example2.com/path")).toBe(false)
});
