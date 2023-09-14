import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import NewLocationSuccess from "../NewLocationSuccess/index.js";

jest.mock("next-cloudinary", () => ({
  CldImage: () => <img alt="Mocked CldImage" />,
}));

jest.mock("next/router", () => ({
  useRouter: () => ({
    push: jest.fn(),
  }),
}));

const mockLocation = {
  title: "Test Title",
  image: {
    src: "test-image-src.jpg",
    width: 150,
    height: 150,
  },
  where: "Test Place",
  when: "Test Date",
  withme: "Test With Me",
  soundtrack: "Test Soundtrack",
  notes: "Test Notes",
};

test("Displays the location title correctly", () => {
  render(<NewLocationSuccess location={mockLocation} />);

  const titleElement = screen.getByText("Test Title");
  expect(titleElement).toBeInTheDocument();
});
