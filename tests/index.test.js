import React from "react";
import { App, PagesList, Page, Article } from "../public/react/components/";
import { render } from '@testing-library/react';
import {describe, expect, it} from "@jest/globals"

/**
 * @jest-environment jsdom
 */
import "regenerator-runtime/runtime";
import ""

describe("Test for Single Page View", () => {
    it("test rendering", () => {
        const { getByTestId } = render(<App />)
        expect(getByTestId("Page")).toBeInTheDocument()
    })

    it("can view all articles", () => {

    })
})