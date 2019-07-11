export let builtinSv = {
  "Monotonic Scrolling": {
      "parameters": [
          {
              "name": "exponent",
              "description": "Exponent to use. 1 is linear easing.",
              "defaultValue": "2.718281828459045"
          },
          {
              "name": "startSv",
              "description": "SV to map the starting point to",
              "defaultValue": "1"
          },
          {
              "name": "endSv",
              "description": "SV to map the end point to",
              "defaultValue": "2"
          }
      ],
      "body": "(() => { \n    return (x, params) => { \n        x = Math.pow(x, params.exponent);\n        return (1 - x) * params.startSv + x * params.endSv; \n    }; \n})();",
      "name": "Monotonic Scrolling",
      "tooltip": "Increase or decrease SV steadily.",
      "description": "Function that helps the user scroll from A to B with exponential easing.",
      "type": 0
  },
  "Sine Scrolling": {
      "parameters": [
          {
              "name": "center",
              "description": "Center point. Wave will oscilate around here.",
              "defaultValue": "1"
          },
          {
              "name": "amplitude",
              "description": "Amplitude. How much to move away from the center.",
              "defaultValue": "0.2"
          }
      ],
      "body": "(() => {\n    return (x, params) => {\n        var angle = 2 * Math.PI * x;\n        var sineval = params.amplitude * Math.sin(angle) + params.center;\n        return sineval;\n    }; \n})()",
      "name": "Sine Scrolling",
      "tooltip": "",
      "description": "Smooth sine scrolling. Waves around center point."
  },
  "Teleporters": {
      "parameters": [
          {
              "name": "peak",
              "description": "Peak SV multiplier.",
              "defaultValue": "10"
          },
          {
              "name": "rate",
              "description": "SV Rate after the peak.",
              "defaultValue": "1"
          },
          {
              "name": "duration",
              "description": "Fraction of the section to last.",
              "defaultValue": "0.1"
          }
      ],
      "body": "(() => { \n    return (x, params) => {\n        if (x < params.duration) return params.peak;\n        else return params.rate;\n    }; \n})()",
      "name": "Teleporters",
      "tooltip": "",
      "description": "Jump that map around with this function. Hits peak for the duration, then a second rate afterwards. Make sure your divisors are at least 1/duration."
  },
  "Rate Jitter": {
      "parameters": [
          {
              "name": "duration",
              "description": "Fraction: How long the jitter lasts on this section",
              "defaultValue": "0.5"
          },
          {
              "name": "startSv",
              "description": "Initial SV value",
              "defaultValue": "1.5"
          },
          {
              "name": "dstRate",
              "description": "Rate the jitter should look like",
              "defaultValue": "1"
          }
      ],
      "body": "(() => {\n    return (x, params) => {\n        var div = 1 / (1 - params.duration);\n        var centerSv = (params.dstRate - params.startSv * params.duration) * div;\n        \n        if (x < params.duration) return params.startSv;\n        if (x >= params.duration && x < 1) return centerSv;\n        if (x == 1) return params.dstRate;\n        return 1;\n    }; \n})()",
      "name": "Rate Jitter",
      "tooltip": "",
      "description": "Jitter between two SV values that look like the target rate, given the first SV value."
  },
  "Bounce": {
      "parameters": [
          {
              "name": "amplitude",
              "description": "The bounce's peak from the center",
              "defaultValue": "0.2"
          },
          {
              "name": "center",
              "description": "The bounce's start point",
              "defaultValue": "1"
          }
      ],
      "body": "(() => { \n    return (x, params) => {\n        var angle = Math.PI * x;\n        var sineval = params.amplitude * Math.sin(angle) + params.center;\n        return sineval;\n    }; \n})()",
      "name": "Bounce",
      "tooltip": "",
      "description": "Bouncy function that goes up and down."
  },
  "Add time": {
      "parameters": [
          {
              "name": "Add value",
              "description": "Amount of time to add into timing points (in MS)",
              "defaultValue": "0"
          }
      ],
      "type": 2,
      "body": "(() => {\n    return (tp, params) => {\n      tp.forEach(el => el.time += params[\"Add value\"]);\n      return tp;\n    };\n})();",
      "name": "Add time",
      "tooltip": "Add time to timing points."
  },
  "Change Offset": {
      "parameters": [
          {
              "name": "New offset",
              "description": "Offset to change timing points to.",
              "defaultValue": "0"
          }
      ],
      "type": 2,
      "body": "(() => {\n    return (tp, params) => {\n      const new_offs = params[\"New offset\"];\n      const adj_value = Math.min.apply(Math, tp.map(x => x.time));\n      const add_val = new_offs - adj_value;\n      tp.forEach(x => x.time += add_val);\n      return tp;\n    };\n})();",
      "name": "Change Offset",
      "tooltip": "Change the offset of your timing point set relative to the earliest one."
  },
  "Multiply SV value": {
      "parameters": [
          {
              "name": "Multiply value",
              "description": "Value to multiply by.",
              "defaultValue": "1"
          }
      ],
      "type": 2,
      "body": "(() => {\n    return (tp, params) => {\n      tp.forEach(x => {\n        if (x.inherited) {\n            let mul = -100 / x.value * params[\"Multiply value\"];\n            x.value = -100 / mul;\n        }\n      });\n      return tp;\n    };\n})();",
      "name": "Multiply SV value",
      "tooltip": "Multiply your inherited timing points by some value."
  },
  "Repeat": {
      "parameters": [
          {
              "name": "Gap",
              "description": "Gap in MS between repetitions",
              "defaultValue": "100"
          },
          {
              "name": "Repetitions",
              "description": "Times to repeat these timing points",
              "defaultValue": "1"
          },
          {
              "name": "Start offset",
              "description": "Set the first repetition's time to this, and calculate those that come afterwards from here.",
              "defaultValue": "0"
          }
      ],
      "type": 2,
      "body": "(() => {\n    return (tp, params) => {\n      let gap = params[\"Gap\"];\n      let repetitions = Math.round(params[\"Repetitions\"]);\n      \n      let start_offset = params[\"Start offset\"];\n      let start_time = Math.min.apply(Math, tp.map(x => x.time));\n      let end_time  = Math.max.apply(Math, tp.map(x => x.time));\n      let adjustment = start_offset - start_time;\n      let duration = end_time - start_time;\n      \n      let ret = [];\n      for (let i = 0; i < repetitions; i++) {\n        let gap_amt = gap * i;\n        let dur_amt = duration * i;\n        \n        for (var point of tp) {\n            let t = point.time + adjustment + gap_amt + dur_amt;\n            ret.push({\n                time: t,\n                value: point.value,\n                kiai: point.kiai,\n                inherited: point.inherited,\n                volume: point.volume,\n                sampleSet: point.sampleSet,\n                sampleIndex: point.sampleIndex,\n                measureLength: point.measureLength\n            });\n        }\n      }\n      \n      return ret;\n    };\n})();",
      "name": "Repeat",
      "tooltip": "Repeat N times a set of timing points with a given gap, offsetting them to the given time."
  }
}