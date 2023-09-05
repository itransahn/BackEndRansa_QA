"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class MockRepository {
    getDetail(id) {
        throw new Error("Method not implemented.");
    }
    save() {
        const MOCK_LEAD = {
            uuid: "00---001",
            message: "test",
            phone: "99999999",
        };
        return Promise.resolve(MOCK_LEAD);
    }
}
exports.default = MockRepository;
