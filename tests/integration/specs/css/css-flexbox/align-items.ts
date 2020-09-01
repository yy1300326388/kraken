/*auto generated*/
describe('align-items', () => {
  it('001', async () => {
    let p;
    let flexbox;
    p = createElement(
      'p',
      {
        style: {
          'box-sizing': 'border-box',
        },
      },
      [createText(`Test passes if there is no red visible on the page.`)]
    );
    flexbox = createElement(
      'div',
      {
        style: {
          'background-color': 'red',
          'align-items': 'center',
          display: 'flex',
          height: '100px',
          width: '300px',
          'box-sizing': 'border-box',
        },
      },
      [
        createElement('div', {
          style: {
            'background-color': 'green',
            height: '52px',
            width: '150px',
            'box-sizing': 'border-box',
          },
        }),
        createElement('div', {
          style: {
            'background-color': 'green',
            height: '52px',
            width: '150px',
            'box-sizing': 'border-box',
          },
        }),
      ]
    );
    BODY.appendChild(p);
    BODY.appendChild(flexbox);

    await matchViewportSnapshot();
  });
  it('002', async () => {
    let p;
    let flexbox;
    p = createElement(
      'p',
      {
        style: {
          'box-sizing': 'border-box',
        },
      },
      [createText(`Test passes if there is no red visible on the page.`)]
    );
    flexbox = createElement(
      'div',
      {
        style: {
          'background-color': 'red',
          'align-items': 'flex-start',
          display: 'flex',
          height: '100px',
          width: '300px',
          'box-sizing': 'border-box',
        },
      },
      [
        createElement('div', {
          style: {
            'background-color': 'green',
            height: '51px',
            width: '150px',
            'box-sizing': 'border-box',
          },
        }),
        createElement('div', {
          style: {
            'background-color': 'green',
            height: '51px',
            width: '150px',
            'box-sizing': 'border-box',
          },
        }),
      ]
    );
    BODY.appendChild(p);
    BODY.appendChild(flexbox);

    await matchViewportSnapshot();
  });
  it('003', async () => {
    let p;
    let flexbox;
    p = createElement(
      'p',
      {
        style: {
          'box-sizing': 'border-box',
        },
      },
      [createText(`Test passes if there is no red visible on the page.`)]
    );
    flexbox = createElement(
      'div',
      {
        style: {
          'background-color': 'red',
          'align-items': 'flex-end',
          display: 'flex',
          height: '100px',
          width: '300px',
          'box-sizing': 'border-box',
        },
      },
      [
        createElement('div', {
          style: {
            'background-color': 'green',
            height: '51px',
            width: '150px',
            'box-sizing': 'border-box',
          },
        }),
        createElement('div', {
          style: {
            'background-color': 'green',
            height: '51px',
            width: '150px',
            'box-sizing': 'border-box',
          },
        }),
      ]
    );
    BODY.appendChild(p);
    BODY.appendChild(flexbox);

    await matchViewportSnapshot();
  });
  xit('004', async () => {
    let div1;
    let div2;
    let div3;
    let div4;
    let div5;
    let div6;
    let div7;
    let div8;
    let flexbox;
    flexbox = createElement(
      'div',
      {
        style: {
          'background-color': 'red',
          'align-items': 'baseline',
          display: 'flex',
          'flex-wrap': 'wrap',
          height: '100px',
          width: '300px',
          color: 'yellow',
          font: '20px/1em Ahem',
          'box-sizing': 'border-box',
        },
      },
      [
        (div1 = createElement(
          'div',
          {
            style: {
              'background-color': 'green',
              color: 'yellow',
              font: '20px/1em Ahem',
              width: '75px',
              'box-sizing': 'border-box',
            },
          },
          [createText(`d1`)]
        )),
        (div2 = createElement(
          'div',
          {
            style: {
              'background-color': 'green',
              color: 'yellow',
              font: '20px/1em Ahem',
              width: '75px',
              'box-sizing': 'border-box',
            },
          },
          [createText(`d2`)]
        )),
        (div3 = createElement(
          'div',
          {
            style: {
              'background-color': 'green',
              color: 'yellow',
              font: '20px/1em Ahem',
              width: '75px',
              'font-size': '40px',
              'box-sizing': 'border-box',
            },
          },
          [createText(`d3`)]
        )),
        (div4 = createElement(
          'div',
          {
            style: {
              'background-color': 'green',
              color: 'yellow',
              font: '20px/1em Ahem',
              width: '75px',
              'box-sizing': 'border-box',
            },
          },
          [createText(`d4`)]
        )),
        (div5 = createElement(
          'div',
          {
            style: {
              'background-color': 'green',
              color: 'yellow',
              font: '20px/1em Ahem',
              width: '75px',
              'box-sizing': 'border-box',
            },
          },
          [createText(`d5`)]
        )),
        (div6 = createElement(
          'div',
          {
            style: {
              'background-color': 'green',
              color: 'yellow',
              font: '20px/1em Ahem',
              width: '75px',
              'box-sizing': 'border-box',
            },
          },
          [createText(`d6`)]
        )),
        (div7 = createElement(
          'div',
          {
            style: {
              'background-color': 'green',
              color: 'yellow',
              font: '20px/1em Ahem',
              width: '75px',
              'font-size': '40px',
              'box-sizing': 'border-box',
            },
          },
          [createText(`d7`)]
        )),
        (div8 = createElement(
          'div',
          {
            style: {
              'background-color': 'green',
              color: 'yellow',
              font: '20px/1em Ahem',
              width: '75px',
              'box-sizing': 'border-box',
            },
          },
          [createText(`d8`)]
        )),
      ]
    );
    BODY.appendChild(flexbox);

    await matchViewportSnapshot();
  });
  xit('005', async () => {
    let p;
    let flexbox;
    p = createElement(
      'p',
      {
        style: {
          'box-sizing': 'border-box',
        },
      },
      [createText(`Test passes if there is no red visible on the page.`)]
    );
    flexbox = createElement(
      'div',
      {
        style: {
          'background-color': 'red',
          'align-items': 'stretch',
          display: 'flex',
          height: '100px',
          width: '300px',
          'box-sizing': 'border-box',
        },
      },
      [
        createElement('div', {
          style: {
            'background-color': 'green',
            width: '150px',
            'box-sizing': 'border-box',
          },
        }),
        createElement('div', {
          style: {
            'background-color': 'green',
            width: '150px',
            'box-sizing': 'border-box',
          },
        }),
      ]
    );
    BODY.appendChild(p);
    BODY.appendChild(flexbox);

    await matchViewportSnapshot();
  });
  it('006', async () => {
    let p;
    let block;
    let flexbox;
    p = createElement(
      'p',
      {
        style: {
          'box-sizing': 'border-box',
        },
      },
      [createText(`Test passes if there is no red visible on the page.`)]
    );
    block = createElement(
      'div',
      {
        style: {
          position: 'absolute',
          width: '300px',
          height: '100px',
          'box-sizing': 'border-box',
        },
      },
      [
        createElement('div', {
          style: {
            'box-sizing': 'border-box',
            width: '200px',
            height: '50px',
            'background-color': 'yellow',
          },
        }),
      ]
    );
    flexbox = createElement(
      'div',
      {
        style: {
          font: '50px/1 Ahem',
          'background-color': 'green',
          'flex-direction': 'column',
          'align-items': 'flex-start',
          display: 'flex',
          width: '300px',
          height: '100px',
          'box-sizing': 'border-box',
        },
      },
      [
        createElement(
          'div',
          {
            style: {
              'box-sizing': 'border-box',
              'background-color': 'red',
              color: 'red',
            },
          },
          [createText(`XXXX`)]
        ),
      ]
    );
    BODY.appendChild(p);
    BODY.appendChild(block);
    BODY.appendChild(flexbox);

    await matchViewportSnapshot();
  });
  it('007', async () => {
    let div;
    let div_1;
    div = createElement('div', {
      style: {
        'box-sizing': 'border-box',
        position: 'absolute',
        width: '100px',
        height: '100px',
        'background-color': 'green',
      },
    });
    div_1 = createElement(
      'div',
      {
        style: {
          'box-sizing': 'border-box',
          display: 'flex',
          'flex-direction': 'column',
          width: '100px',
          height: '100px',
          'line-height': '20px',
          'align-items': 'center',
          'background-color': 'green',
        },
      },
      [
        createElement('img', {
          style: {
            'box-sizing': 'border-box',
          },
        }),
      ]
    );
    BODY.appendChild(div);
    BODY.appendChild(div_1);

    await matchViewportSnapshot();
  });
  it('baseline-overflow-non-visible', async () => {
    let overflow;
    let flex;
    flex = createElement(
      'div',
      {
        style: {
          display: 'flex',
          'align-items': 'baseline',
          'box-sizing': 'border-box',
        },
      },
      [
        createElement(
          'span',
          {
            style: {
              'box-sizing': 'border-box',
            },
          },
          [createText(`XX`)]
        ),
        createElement(
          'div',
          {
            style: {
              'box-sizing': 'border-box',
            },
          },
          [
            (overflow = createElement(
              'div',
              {
                style: {
                  overflow: 'hidden',
                  height: '20px',
                  'box-sizing': 'border-box',
                },
              },
              [createText(`YY`)]
            )),
          ]
        ),
      ]
    );
    BODY.appendChild(flex);

    await matchViewportSnapshot();
  });

  it("works with stretch in row flex direction when flex-grow is set", async () => {
    let containingBlock = createViewElement(
      {
        position: 'relative',
        flexDirection: 'row',
        width: '300px',
        margin: '50px',
        padding: '40px 0',
        height: '100px',
        alignItems: 'stretch',
        backgroundColor: '#999',
      },
      [
        createElement('div', {
          style: {
           display: 'flex',
           flexDirection: 'row',
           flexGrow: 1,
           height: '30px',
           overflow: 'hidden',
           backgroundColor: 'red',
          }
        }),
        createElement('div', {
          style: {
            display: 'flex',
            position: 'relative',
            width: '100px',
            backgroundColor: 'yellow'
          }
        })
      ]
    );
    BODY.appendChild(containingBlock);
    await matchViewportSnapshot();
  });

  it("works with flex-start in row flex direction when flex-grow is set", async () => {
    let containingBlock = createViewElement(
      {
        position: 'relative',
        flexDirection: 'row',
        width: '300px',
        margin: '50px',
        padding: '40px 0',
        height: '100px',
        alignItems: 'flex-start',
        backgroundColor: '#999',
      },
      [
        createElement('div', {
          style: {
           display: 'flex',
           flexDirection: 'row',
           flexGrow: 1,
           height: '30px',
           overflow: 'hidden',
           backgroundColor: 'red',
          }
        }),
        createElement('div', {
          style: {
            display: 'flex',
            position: 'relative',
            width: '100px',
            height: '150px',
            backgroundColor: 'yellow'
          }
        })
      ]
    );
    BODY.appendChild(containingBlock);
    await matchViewportSnapshot();
  });

  it("works with center in row flex direction when flex-grow is set", async () => {
    let containingBlock = createViewElement(
      {
        position: 'relative',
        flexDirection: 'row',
        width: '300px',
        margin: '50px',
        padding: '40px 0',
        height: '100px',
        alignItems: 'center',
        backgroundColor: '#999',
      },
      [
        createElement('div', {
          style: {
           display: 'flex',
           flexDirection: 'row',
           flexGrow: 1,
           height: '30px',
           overflow: 'hidden',
           backgroundColor: 'red',
          }
        }),
        createElement('div', {
          style: {
            display: 'flex',
            position: 'relative',
            width: '100px',
            height: '150px',
            backgroundColor: 'yellow'
          }
        })
      ]
    );
    BODY.appendChild(containingBlock);
    await matchViewportSnapshot();
  });

  it("works with flex-end in row flex direction when flex-grow is set", async () => {
    let containingBlock = createViewElement(
      {
        position: 'relative',
        flexDirection: 'row',
        width: '300px',
        margin: '50px',
        padding: '40px 0',
        height: '100px',
        alignItems: 'flex-end',
        backgroundColor: '#999',
      },
      [
        createElement('div', {
          style: {
           display: 'flex',
           flexDirection: 'row',
           flexGrow: 1,
           height: '30px',
           overflow: 'hidden',
           backgroundColor: 'red',
          }
        }),
        createElement('div', {
          style: {
            display: 'flex',
            position: 'relative',
            width: '100px',
            height: '100px',
            backgroundColor: 'yellow'
          }
        })
      ]
    );
    BODY.appendChild(containingBlock);
    await matchViewportSnapshot();
  });

  it("works with stretch in column flex direction when flex-grow is set", async () => {
    let containingBlock = createViewElement(
      {
        position: 'relative',
        flexDirection: 'column',
        width: '300px',
        margin: '50px',
        padding: '0 40px',
        height: '100px',
        alignItems: 'stretch',
        backgroundColor: '#999',
      },
      [
        createElement('div', {
          style: {
           display: 'flex',
           flexDirection: 'row',
           flexGrow: 1,
           width: '50px',
           height: '20px',
           overflow: 'hidden',
           backgroundColor: 'red',
          }
        }),
        createElement('div', {
          style: {
            display: 'flex',
            position: 'relative',
            height: '30px',
            backgroundColor: 'yellow'
          }
        })
      ]
    );
    BODY.appendChild(containingBlock);
    await matchViewportSnapshot();
  });

  it("works with flex-start in column flex direction when flex-grow is set", async () => {
    let containingBlock = createViewElement(
      {
        position: 'relative',
        flexDirection: 'column',
        width: '300px',
        margin: '50px',
        padding: '0 40px',
        height: '100px',
        alignItems: 'flex-start',
        backgroundColor: '#999',
      },
      [
        createElement('div', {
          style: {
           display: 'flex',
           flexDirection: 'row',
           flexGrow: 1,
           width: '50px',
           height: '20px',
           overflow: 'hidden',
           backgroundColor: 'red',
          }
        }),
        createElement('div', {
          style: {
            display: 'flex',
            position: 'relative',
            width: '350px',
            height: '30px',
            backgroundColor: 'yellow'
          }
        })
      ]
    );
    BODY.appendChild(containingBlock);
    await matchViewportSnapshot();
  });

  it("works with center in column flex direction when flex-grow is set", async () => {
    let containingBlock = createViewElement(
      {
        position: 'relative',
        flexDirection: 'column',
        width: '300px',
        margin: '50px',
        padding: '0 40px',
        height: '100px',
        alignItems: 'center',
        backgroundColor: '#999',
      },
      [
        createElement('div', {
          style: {
           display: 'flex',
           flexDirection: 'row',
           flexGrow: 1,
           width: '50px',
           height: '20px',
           overflow: 'hidden',
           backgroundColor: 'red',
          }
        }),
        createElement('div', {
          style: {
            display: 'flex',
            position: 'relative',
            width: '350px',
            height: '30px',
            backgroundColor: 'yellow'
          }
        })
      ]
    );
    BODY.appendChild(containingBlock);
    await matchViewportSnapshot();
  });

  it("works with flex-end in column flex direction when flex-grow is set", async () => {
    let containingBlock = createViewElement(
      {
        position: 'relative',
        flexDirection: 'column',
        width: '300px',
        margin: '50px',
        padding: '0 40px',
        height: '100px',
        alignItems: 'flex-end',
        backgroundColor: '#999',
      },
      [
        createElement('div', {
          style: {
           display: 'flex',
           flexDirection: 'row',
           flexGrow: 1,
           width: '50px',
           height: '20px',
           overflow: 'hidden',
           backgroundColor: 'red',
          }
        }),
        createElement('div', {
          style: {
            display: 'flex',
            position: 'relative',
            width: '350px',
            height: '30px',
            backgroundColor: 'yellow'
          }
        })
      ]
    );
    BODY.appendChild(containingBlock);
    await matchViewportSnapshot();
  });
});

