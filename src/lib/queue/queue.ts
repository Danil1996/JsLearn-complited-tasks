
class Queue {

  private readonly queue: number[] = []

  enqueue(element: number): void {
    this.queue.push(element)
  }

  dequeue(): number | undefined {
    if (this.queue.length === 0) throw new Error('Queue is empty')
    return this.queue.shift()
  }

  peek(): number | undefined {
    if (this.queue.length === 0) throw new Error('Queue is empty')
    return this.queue[0]
  }

  count(): number {
    return this.queue.length
  }
}